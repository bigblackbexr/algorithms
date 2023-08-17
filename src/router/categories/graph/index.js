import bellmanFordRoute from "./bellman-ford";
import bridgesRoute from "./bridges";
import depthSearchRoute from "./depth-search";
import graph from "@/components/algorithm.vue";

const graphCategory = [
  {
    path: '/graph',
    name: 'graph',
    component: graph,
    props: true
  },
  ...bellmanFordRoute,
  ...bridgesRoute,
  ...depthSearchRoute,
];

export default graphCategory;