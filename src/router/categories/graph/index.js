import graph from "@/components/algorithm.vue";
import bellmanFordRoute from "./bellman-ford";

const graphCategory = [
  {
    path: '/graph',
    name: 'graph',
    component: graph,
    props: true
  },
  ...bellmanFordRoute
];

export default graphCategory;