import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/Home.vue";
import NotFoundView from "../views/NotFound/NotFound.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    console.log(from, savedPosition)
  },
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/:catchAll(.*)",

      name: "NotFoundView",
      component: NotFoundView,
    },
  ],
});

export default router;
