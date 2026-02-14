import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SpotifyCallback from "../components/spotifyCallback.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path:"/callback",
    name:"spotifyCallback",
    component:SpotifyCallback
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
