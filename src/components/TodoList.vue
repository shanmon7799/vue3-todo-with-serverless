<script lang="ts">
import { defineComponent } from "vue";
import TodoDataService from "../services/TodoDataService";
import Todo from "../types/todo";
import ResponseData from "../types/ResponseData";
export default defineComponent({
  name: "todos-list",
  data() {
    return {
      todos: [] as Todo[],
      currentTodo: {} as Todo,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTodos() {
      TodoDataService.getAll()
        .then((response: ResponseData) => {
          this.todos = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTodos();
      this.currentTodo = {} as Todo;
      this.currentIndex = -1;
    },
    setActiveTodo(todo: Todo, index = -1) {
      this.currentTodo = todo;
      this.currentIndex = index;
    },
    searchTitle() {
      TodoDataService.findByTitle(this.title)
        .then((response: ResponseData) => {
          this.todos = response.data;
          this.setActiveTodo({} as Todo);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTodos();
  },
});
</script>

<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="title"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Todo List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(todo, index) in todos"
            :key="index"
            @click="setActiveTodo(todo, index)"
          >
            {{ todo.title }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentTodo.id">
          <h4>Detail</h4>
          <div>
            <label><strong>Task:</strong></label> {{ currentTodo.title }}
          </div>
          <router-link
            :to="'/todo/' + currentTodo.id"
            class="badge badge-warning"
            >Edit</router-link
          >
        </div>
        <div v-else>
          <br />
          <p>click todo you can operate more..</p>
        </div>
      </div>
    </div>
  </template>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
