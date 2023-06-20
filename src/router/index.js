import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import Software from "../views/Software.vue";
// import Test from "../views/Test.vue";
// import Graphics from "../views/Graphics.vue";
// import BlogArticle from "../views/BlogArticle.vue";
// import BlogHome from "../views/BlogHome.vue";
// import BlogList from "../views/BlogList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/software",
    name: "software",
    component: () => import("../views/Software.vue"),
  },
  {
    path: "/graphics",
    name: "graphics",
    component: () => import("../views/Graphics.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogHome.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/BlogList.vue"),
      },
      {
        path: "post/:id",
        component: () => import("../views/BlogArticle.vue"),
      },
    ],
  },
  ,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: routes,
});

export default router;
