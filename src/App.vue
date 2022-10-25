<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Assignment</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/todo" class="nav-link">Todo List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Create</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
