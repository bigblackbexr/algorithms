import math from "@/components/algorithm.vue";

import bitManipulationRoute from "./bit-manipulation";
import complexNumbersRoute from "./complex-numbers";
import discreteFourierTransformRoute from "./discrete-fourier-transform";
import euclidesRoute from "./euclides";
import factorialRoute from "./factorial";
import fastExponentiationRoute from "./fast-exponentiation";
import fibonacciRoute from "./fibonacci";

const mathCategory = [
  {
    path: '/math',
    name: 'math',
    component: math,
    props: true
  },
  ...bitManipulationRoute,
  ...complexNumbersRoute,
  ...discreteFourierTransformRoute,
  ...euclidesRoute,
  ...factorialRoute,
  ...fastExponentiationRoute,
  ...fibonacciRoute,
];

export default mathCategory;