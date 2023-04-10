import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Software from "../views/Software.vue";
import Test from "../views/Test.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/software",
    name: "software",
    component: Software,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "hash",
  routes: routes,
});

export default router;
