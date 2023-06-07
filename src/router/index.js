import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Software from "../views/Software.vue";
import Test from "../views/Test.vue";
import Graphics from "../views/Graphics.vue";
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
    path: "/graphics",
    name: "graphics",
    component: Graphics,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: routes,
});

export default router;
