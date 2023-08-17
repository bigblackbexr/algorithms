import graph from "@/components/algorithm.vue";
import bellmanFordRoute from "./bellman-ford";
import bridgesRoute from "./bridges";

const graphCategory = [
  {
    path: '/graph',
    name: 'graph',
    component: graph,
    props: true
  },
  ...bellmanFordRoute,
  ...bridgesRoute
];

export default graphCategory;