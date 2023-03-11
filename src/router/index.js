import { createRouter, createWebHistory } from "vue-router"

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // INDEX

    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },

    // CATEGORIES

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

    // GRAPH ALGORITHMS

    {
      path: '/graph/depth-search',
      name: 'depth-search',
      component: () => import('../components/algorithms/graph/algorithms/depth-search.vue'),
      props: true
    },
    {
      path: '/graph/width-search',
      name: 'width-search',
      component: () => import('../components/algorithms/graph/algorithms/width-search.vue'),
      props: true
    },
    {
      path: '/graph/kruskal',
      name: 'kruskal',
      component: () => import('../components/algorithms/graph/algorithms/kruskal.vue'),
      props: true
    },
    {
      path: '/graph/dijkstra',
      name: 'dijkstra',
      component: () => import('../components/algorithms/graph/algorithms/dijkstra.vue'),
      props: true
    },
    {
      path: '/graph/bellman-ford',
      name: 'bellman-ford',
      component: () => import('../components/algorithms/graph/algorithms/bellman-ford.vue'),
      props: true
    },
    {
      path: '/graph/floyd-warshall',
      name: 'floyd-warshall',
      component: () => import('../components/algorithms/graph/algorithms/floyd-warshall.vue'),
      props: true
    },
    {
      path: '/graph/detect-cycles',
      name: 'detect-cycles',
      component: () => import('../components/algorithms/graph/algorithms/detect-cycles.vue'),
      props: true
    },
    {
      path: '/graph/prim',
      name: 'prim',
      component: () => import('../components/algorithms/graph/algorithms/prim.vue'),
      props: true
    },
    {
      path: '/graph/topological-ordering',
      name: 'topological-ordering',
      component: () => import('../components/algorithms/graph/algorithms/topological-ordering.vue'),
      props: true
    },
    {
      path: '/graph/points-articulation',
      name: 'points-articulation',
      component: () => import('../components/algorithms/graph/algorithms/points-articulation.vue'),
      props: true
    },
    {
      path: '/graph/bridges',
      name: 'bridges',
      component: () => import('../components/algorithms/graph/algorithms/bridges.vue'),
      props: true
    },
    {
      path: '/graph/eulerian-path-circuit',
      name: 'eulerian-path-circuit',
      component: () => import('../components/algorithms/graph/algorithms/eulerian-path-circuit.vue'),
      props: true
    },
    {
      path: '/graph/hamiltonian-cycle',
      name: 'hamiltonian-cycle',
      component: () => import('../components/algorithms/graph/algorithms/hamiltonian-cycle.vue'),
      props: true
    },
    {
      path: '/graph/strongly-connected-components',
      name: 'strongly-connected-components',
      component: () => import('../components/algorithms/graph/algorithms/strongly-connected-components.vue'),
      props: true
    },
    {
      path: '/graph/traveler-problem',
      name: 'traveler-problem',
      component: () => import('../components/algorithms/graph/algorithms/traveler-problem.vue'),
      props: true
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
  ]
})

export default router