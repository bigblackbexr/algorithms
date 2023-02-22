import { createRouter, createWebHistory } from "vue-router"

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/encrypt',
      name: 'encrypt',
      component: () => import('../components/algorithm.vue'),
      props: true
    }
  ]
})

export default router