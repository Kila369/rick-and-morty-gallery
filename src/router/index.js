import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Charachter from "@/views/Charachter.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    name: "charachter",
    path: "/charachter/:id",
    component: Charachter,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
