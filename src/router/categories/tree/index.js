import tree from "@/components/algorithm.vue";

import depthRoute from "./depth";
import widthRoute from "./width";

const treeCategory = [
  {
    path: '/tree',
    name: 'tree',
    component: tree,
    props: true
  },
  ...depthRoute,
  ...widthRoute,
];

export default treeCategory;
