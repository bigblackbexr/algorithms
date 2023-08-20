import detectCyclesComponent from '@/components/algorithms/graph/algorithms/detect-cycles.vue';

const detectCyclesRoute = [
  {
    path: '/graph/depth-search',
    name: 'depth-search',
    component: detectCyclesComponent,
    props: true
  },
];

export default detectCyclesRoute;
