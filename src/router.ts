import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/todo",
    name: "todo",
    component: () => import("./components/TodoList.vue"),
  },
  {
    path: "/todo/:id",
    name: "todo-details",
    component: () => import("./components/Todo.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTodo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
