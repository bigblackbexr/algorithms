import search from "@/components/algorithm.vue";

import binaryRoute from "./binary";
import interpolationRoute from "./interpolation";
import jumpRoute from "./jump";
import linear from "./linear";

const searchCategory = [
  {
    path: '/search',
    name: 'search',
    component: search,
    props: true
  },
  ...binaryRoute,
  ...interpolationRoute,
  ...jumpRoute,
  ...linear,
];

export default searchCategory;