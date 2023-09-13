import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./categories/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...allRoutes,

    // INDEX
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },

  ]
})

export default router
