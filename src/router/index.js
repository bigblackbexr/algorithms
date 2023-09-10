import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./categories/index";

console.log(allRoutes, 'aquitoy');

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

    // CATEGORIES
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

    // STRING AlGORITHMS

    {
      path: '/string/hamming',
      name: 'hamming',
      component: () => import('../components/algorithms/string/algorithms/hamming.vue')
    },
    {
      path: '/string/knuth-morris-pratt',
      name: 'knuth-morris-pratt',
      component: () => import('../components/algorithms/string/algorithms/knuth-morris-pratt.vue')
    },
    {
      path: '/string/levenshtein',
      name: 'levenshtein',
      component: () => import('../components/algorithms/string/algorithms/levenshtein.vue')
    },
    {
      path: '/string/longest',
      name: 'longest',
      component: () => import('../components/algorithms/string/algorithms/longest.vue')
    },
    {
      path: '/string/rabin-karp',
      name: 'rabin-karp',
      component: () => import('../components/algorithms/string/algorithms/rabin-karp.vue')
    },
    {
      path: '/string/regular-expressions',
      name: 'regular-expressions',
      component: () => import('../components/algorithms/string/algorithms/regular-expressions.vue')
    },
    {
      path: '/string/z',
      name: 'z',
      component: () => import('../components/algorithms/string/algorithms/z.vue')
    },

    // TREE AlGORITHMS

    {
      path: '/tree/depth',
      name: 'depth',
      component: () => import('../components/algorithms/tree/algorithms/depth.vue')
    },
    {
      path: '/tree/width',
      name: 'width',
      component: () => import('../components/algorithms/tree/algorithms/width.vue')
    },

    // {
    //   path: '/string/#',
    //   name: '#',
    //   component: () => import('../components/algorithms/string/algorithms/#.vue')
    // },
  ]
})

export default router
