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

    // MATH ALGORITHMS

    {
      path: '/math/bit-manipulation',
      name: 'bit-manipulation',
      component: () => import('../components/algorithms/math/algorithms/bit-manipulation.vue'),
      props: true
    },
    {
      path: '/math/complex-numbers',
      name: 'complex-numbers',
      component: () => import('../components/algorithms/math/algorithms/complex-numbers.vue'),
      props: true
    },
    {
      path: '/math/discrete-fourier-transform',
      name: 'discrete-fourier-transform',
      component: () => import('../components/algorithms/math/algorithms/discrete-fourier-transform.vue'),
      props: true
    },
    {
      path: '/math/euclides',
      name: 'euclides',
      component: () => import('../components/algorithms/math/algorithms/euclides.vue'),
      props: true
    },
    {
      path: '/math/factorial',
      name: 'factorial',
      component: () => import('../components/algorithms/math/algorithms/factorial.vue'),
      props: true
    },
    {
      path: '/math/fast-exponentiation',
      name: 'fast-exponentiation',
      component: () => import('../components/algorithms/math/algorithms/fast-exponentiation.vue'),
      props: true
    },
    {
      path: '/math/fibonacci',
      name: 'fibonacci',
      component: () => import('../components/algorithms/math/algorithms/fibonacci.vue'),
      props: true
    },
    {
      path: '/math/integer-partition',
      name: 'integer-partition',
      component: () => import('../components/algorithms/math/algorithms/integer-partition.vue'),
      props: true
    },
    {
      path: '/math/is-power-two',
      name: 'is-power-two',
      component: () => import('../components/algorithms/math/algorithms/is-power-two.vue'),
      props: true
    },
    {
      path: '/math/least-common-multiple',
      name: 'least-common-multiple',
      component: () => import('../components/algorithms/math/algorithms/least-common-multiple.vue'),
      props: true
    },
    {
      path: '/math/lui-hius-pi',
      name: 'lui-hius-pi',
      component: () => import('../components/algorithms/math/algorithms/lui-hius-pi.vue'),
      props: true
    },
    {
      path: '/math/pascals-triangle',
      name: 'pascals-triangle',
      component: () => import('../components/algorithms/math/algorithms/pascals-triangle.vue'),
      props: true
    },
    {
      path: '/math/primality-test',
      name: 'primality-test',
      component: () => import('../components/algorithms/math/algorithms/primality-test.vue'),
      props: true
    },
    {
      path: '/math/radians-and-degrees',
      name: 'radians-and-degrees',
      component: () => import('../components/algorithms/math/algorithms/radians-and-degrees.vue'),
      props: true
    },
    {
      path: '/math/sieve-eratosthenes',
      name: 'sieve-eratosthenes',
      component: () => import('../components/algorithms/math/algorithms/sieve-eratosthenes.vue'),
      props: true
    }
  ]
})

export default router