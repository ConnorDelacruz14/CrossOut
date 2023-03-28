import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/game",
      name: "Game",
      component: () => import("../views/Game.vue"),
    },
    {
      path: "/custom",
      name: "CustomGame",
      component: () => import("../views/CustomGame.vue"),
    },
  ],
});

export default router;
