import set from "@/components/algorithm.vue";

import backpackProblemRoute from "./backpack-problem";
import cartesianProductRoute from "./cartesian-product";
import combinationsRoute from "./combinations";
import combinedSumRoute from "./combined-sum";
import fisherYatesPermutationRoute from "./fisher–yates-permutation";
import longestCommonSubsequenceRoute from "./longest-common-subsequence";
import longestGrowingSubsequenceRoute from "./longest-growing-subsequence";
import maximumSubarrayRoute from "./maximum-subarray";
import permutationsRoute from "./permutations";
import setPowerRoute from "./set-power";
import shortestCommonSupersequenceRoute from "./shortest-common-supersequence";

const setCategory = [
  {
    path: '/set',
    name: 'set',
    component: set,
    props: true
  },
  ...backpackProblemRoute,
  ...cartesianProductRoute,
  ...combinationsRoute,
  ...combinedSumRoute,
  ...fisherYatesPermutationRoute,
  ...longestCommonSubsequenceRoute,
  ...longestGrowingSubsequenceRoute,
  ...maximumSubarrayRoute,
  ...permutationsRoute,
  ...setPowerRoute,
  ...shortestCommonSupersequenceRoute,
];

export default setCategory;