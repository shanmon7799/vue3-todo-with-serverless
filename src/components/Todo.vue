<script lang="ts">
import { defineComponent } from "vue";
import TodoDataService from "../services/TodoDataService";
import Todo from "../types/todo";
import ResponseData from "../types/ResponseData";
export default defineComponent({
  name: "todo-detail",
  data() {
    return {
      currentTodo: {} as Todo,
      message: "",
    };
  },
  methods: {
    getTodo(id: any) {
      TodoDataService.get(id)
        .then((response: ResponseData) => {
          this.currentTodo = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    updateTodo() {
      TodoDataService.update(this.currentTodo.id, this.currentTodo)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "Update Suceess, and go back todo list soon";
          setTimeout( () => this.$router.push({ name: "todo" }
          ), 3000)
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    deleteTodo() {
      TodoDataService.delete(this.currentTodo.id)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.$router.push({ name: "todo" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTodo(this.$route.params.id);
  },
});
</script>

<template>
  <div v-if="currentTodo.id" class="edit-form">
    <h4>Edit Todo</h4>
    <form>
      <div class="form-group">
        <label for="title">Task:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTodo.title"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deleteTodo">Delete</button>
    <button type="submit" class="badge badge-success" @click="updateTodo">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Wait a second..</p>
  </div>
</template>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
