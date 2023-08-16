import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./categories/index";

console.log(allRoutes,'aquitoy');

const router = createRouter ({
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
    },

    // NO ALGORITHMS
    {
      path: '/no/tower-hanoi',
      name: 'tower-hanoi',
      component: () => import('../components/algorithms/no/algorithms/tower-hanoi.vue'),
      props: true
    },
    {
      path: '/no/square-matrix-rotation',
      name: 'square-matrix-rotation',
      component: () => import('../components/algorithms/no/algorithms/square-matrix-rotation.vue'),
      props: true
    },
    {
      path: '/no/jumping-game',
      name: 'jumping-game',
      component: () => import('../components/algorithms/no/algorithms/jumping-game.vue'),
      props: true
    },
    {
      path: '/no/unique-paths',
      name: 'unique-paths',
      component: () => import('../components/algorithms/no/algorithms/unique-paths.vue'),
      props: true
    },
    {
      path: '/no/rain-terraces',
      name: 'rain-terraces',
      component: () => import('../components/algorithms/no/algorithms/rain-terraces.vue'),
      props: true
    },
    {
      path: '/no/n-queens-problem',
      name: 'n-queens-problem',
      component: () => import('../components/algorithms/no/algorithms/n-queens-problem.vue'),
      props: true
    },
    {
      path: '/no/knight-tour',
      name: 'knight-tour',
      component: () => import('../components/algorithms/no/algorithms/knight-tour.vue'),
      props: true
    },

    // SEARCH AlGORITHMS

    {
      path: '/search/binary',
      name: 'binary',
      component: () => import('../components/algorithms/search/algorithms/binary.vue')
    },
    {
      path: '/search/interpolation',
      name: 'interpolation',
      component: () => import('../components/algorithms/search/algorithms/interpolation.vue')
    },
    {
      path: '/search/jump',
      name: 'jump',
      component: () => import('../components/algorithms/search/algorithms/jump.vue')
    },
    {
      path: '/search/linear',
      name: 'linear',
      component: () => import('../components/algorithms/search/algorithms/linear.vue')
    },

    // SET AlGORITHMS

    {
      path: '/set/backpack-problem',
      name: 'backpack-problem',
      component: () => import('../components/algorithms/set/algorithms/backpack-problem.vue')
    },
    {
      path: '/set/cartesian-product',
      name: 'cartesian-product',
      component: () => import('../components/algorithms/set/algorithms/cartesian-product.vue')
    },
    {
      path: '/set/combinations',
      name: 'combinations',
      component: () => import('../components/algorithms/set/algorithms/combinations.vue')
    },
    {
      path: '/set/combined-sum',
      name: 'combined-sum',
      component: () => import('../components/algorithms/set/algorithms/combined-sum.vue')
    },
    {
      path: '/set/fisher–yates-permutation',
      name: 'fisher–yates-permutation',
      component: () => import('../components/algorithms/set/algorithms/fisher–yates-permutation.vue')
    },
    {
      path: '/set/longest-common-subsequence',
      name: 'longest-common-subsequence',
      component: () => import('../components/algorithms/set/algorithms/longest-common-subsequence.vue')
    },
    {
      path: '/set/longest-growing-subsequence',
      name: 'longest-growing-subsequence',
      component: () => import('../components/algorithms/set/algorithms/longest-growing-subsequence.vue')
    },
    {
      path: '/set/maximum-subarray',
      name: 'maximum-subarray',
      component: () => import('../components/algorithms/set/algorithms/maximum-subarray.vue')
    },
    {
      path: '/set/permutations',
      name: 'permutations',
      component: () => import('../components/algorithms/set/algorithms/permutations.vue')
    },
    {
      path: '/set/set-power',
      name: 'set-power',
      component: () => import('../components/algorithms/set/algorithms/set-power.vue')
    },
    {
      path: '/set/shortest-common-supersequence',
      name: 'shortest-common-supersequence',
      component: () => import('../components/algorithms/set/algorithms/shortest-common-supersequence.vue')
    },

    // SORT AlGORITHMS

    {
      path: '/sort/accounts',
      name: 'accounts',
      component: () => import('../components/algorithms/sort/algorithms/accounts.vue')
    },
    {
      path: '/sort/bubble',
      name: 'bubble',
      component: () => import('../components/algorithms/sort/algorithms/bubble.vue')
    },
    {
      path: '/sort/heap',
      name: 'heap',
      component: () => import('../components/algorithms/sort/algorithms/heap.vue')
    },
    {
      path: '/sort/insertion',
      name: 'insertion',
      component: () => import('../components/algorithms/sort/algorithms/insertion.vue')
    },
    {
      path: '/sort/merge',
      name: 'merge',
      component: () => import('../components/algorithms/sort/algorithms/merge.vue')
    },
    {
      path: '/sort/quicksort',
      name: 'quicksort',
      component: () => import('../components/algorithms/sort/algorithms/quicksort.vue')
    },
    {
      path: '/sort/radix',
      name: 'radix',
      component: () => import('../components/algorithms/sort/algorithms/radix.vue')
    },
    {
      path: '/sort/selection',
      name: 'selection',
      component: () => import('../components/algorithms/sort/algorithms/selection.vue')
    },
    {
      path: '/sort/shellsort',
      name: 'shellsort',
      component: () => import('../components/algorithms/sort/algorithms/shellsort.vue')
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