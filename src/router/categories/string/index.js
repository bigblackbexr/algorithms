import string from "@/components/algorithm.vue";

import hammingRoute from "./hamming";
import knuthMorrisPrattRoute from "./knuth-morris-pratt";
import levenshteinRoute from "./levenshtein";
import longestRoute from "./longest";
import rabinKarpRoute from "./rabin-karp";
import regularExpressionsRoute from "./regular-expressions";
import z from "./z";

const stringCategory = [
  {
    path: '/string',
    name: 'string',
    component: string,
    props: true
  },
  ...hammingRoute,
  ...knuthMorrisPrattRoute,
  ...levenshteinRoute,
  ...longestRoute,
  ...rabinKarpRoute,
  ...regularExpressionsRoute,
  ...z,
];

export default stringCategory;
