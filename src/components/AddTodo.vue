<script lang="ts">
import { defineComponent } from "vue";
import TodoDataService from "../services/TodoDataService";
import Todo from "../types/todo";
import ResponseData from "../types/ResponseData";
export default defineComponent({
  name: "add-todo",
  data() {
    return {
      todo: {
        id: null,
        title: ""
      } as Todo,
      submitted: false,
    };
  },
  methods: {
    saveTodo() {
      let data = {
        title: this.todo.title
      };
      TodoDataService.create(data)
        .then((response: ResponseData) => {
          this.todo.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    newTodo() {
      this.submitted = false;
      this.todo = {} as Todo;
    },
  },
});
</script>

<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Task</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="todo.title"
          name="title"
        />
      </div>

      <button @click="saveTodo" class="btn btn-success">Summit</button>
    </div>

    <div v-else>
      <h4>Success</h4>
      <button class="btn btn-success" @click="newTodo">Add more</button>
    </div>
  </div>
</template>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
