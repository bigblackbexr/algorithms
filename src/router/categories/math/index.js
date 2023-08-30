import math from "@/components/algorithm.vue";

import bitManipulationRoute from "./bit-manipulation";
import complexNumbersRoute from "./complex-numbers";
import discreteFourierTransformRoute from "./discrete-fourier-transform";
import euclidesRoute from "./euclides";
import factorialRoute from "./factorial";
import fastExponentiationRoute from "./fast-exponentiation";
import fibonacciRoute from "./fibonacci";
import integerPartitionRoute from "./integer-partition";
import isPowerTwoRoute from "./is-power-two";
import leastCommonMultipleRoute from "./least-common-multiple";
import luiHiusPiRoute from "./lui-hius-pi";
import pascalsTriangleRoute from "./pascals-triangle";
import primalityTestRoute from "./primality-test";
import radiansAndDegreesRoute from "./radians-and-degrees";
import sieveEratosthenesRoute from "./sieve-eratosthenes";

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
  ...integerPartitionRoute,
  ...isPowerTwoRoute,
  ...leastCommonMultipleRoute,
  ...luiHiusPiRoute,
  ...pascalsTriangleRoute,
  ...primalityTestRoute,
  ...radiansAndDegreesRoute,
  ...sieveEratosthenesRoute,
];

export default mathCategory;