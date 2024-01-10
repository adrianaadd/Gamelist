import { createRouter, createWebHistory } from "vue-router";
import GameList from "../components/GameList.vue";
import OneGame from "../components/OneGame.vue";
import Login from "../page/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/GameList",
      name: "GameList",
      component: GameList
    },
    {
      path: "/OneGame/:id",
      name: "OneGame",
      component:OneGame,
    }
  ]
});

export default router;
