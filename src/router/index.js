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
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/math',
      name: 'math',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/no',
      name: 'no',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/string',
      name: 'string',
      component: () => import('../components/algorithm.vue'),
      props: true
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('../components/algorithm.vue'),
      props: true
    },

    // ENCRYPT AlGORITHMS
    {
      path: '/encrypt/hash-polinomial',
      name: 'hash-polinomial',
      component: () => import('../components/algorithms/encrypt/algorithms/hash-polinomial.vue')
    },

    // LIST ALGORITHMS
    {
      path: '/list/direct-route',
      name: 'direct-route',
      component: () => import('../components/algorithms/list/algorithms/direct-route.vue'),
      props: true
    },
    {
      path: '/list/invert-route',
      name: 'invert-route',
      component: () => import('../components/algorithms/list/algorithms/invert-route.vue'),
      props: true
    },

    // GRAPh ALGORITHMS
    {
      path: '/graph/invert-route',
      name: 'invert-route',
      component: () => import('../components/algorithms/list/algorithms/invert-route.vue'),
      props: true
    },

  ]
})

export default router