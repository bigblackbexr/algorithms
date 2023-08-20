import detectCyclesComponent from '@/components/algorithms/graph/algorithms/detect-cycles.vue';

const detectCyclesRoute = [
  {
    path: '/graph/detect-cycles',
    name: 'detect-cycles',
    component: detectCyclesComponent,
    props: true
  },
];

export default detectCyclesRoute;
