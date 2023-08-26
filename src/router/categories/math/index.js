import math from "@/components/algorithm.vue";
import bitManipulationRoute from "./bit-manipulation";

const mathCategory = [
  {
    path: '/math',
    name: 'math',
    component: math,
    props: true
  },
  ...bitManipulationRoute
];

export default mathCategory;