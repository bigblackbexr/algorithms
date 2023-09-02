import graph from "@/components/algorithm.vue";

import bellmanFordRoute from "./bellman-ford";
import bridgesRoute from "./bridges";
import depthSearchRoute from "./depth-search";
import detectCyclesRoute from "./detect-cycles";
import dijkstraRoute from "./dijkstra";
import eulerianPathCircuitRoute from "./eulerian-path-circuit";
import floydWarshallRoute from "./floyd-warshall";
import hamiltonianCycleRoute from "./hamiltonian-cycle";
import kruskalRoute from "./kruskal";
import pointsArticulationRoute from "./points-articulation";
import primRoute from "./prim";
import stronglyConnectedComponentsRoute from "./strongly-connected-components";
import topologicalOrderingRoute from "./topological-ordering";
import travelerProblemRoute from "./traveler-problem";
import widthSearchRoute from "./width-search";

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
  ...detectCyclesRoute,
  ...dijkstraRoute,
  ...eulerianPathCircuitRoute,
  ...floydWarshallRoute,
  ...hamiltonianCycleRoute,
  ...kruskalRoute,
  ...pointsArticulationRoute,
  ...primRoute,
  ...stronglyConnectedComponentsRoute,
  ...topologicalOrderingRoute,
  ...travelerProblemRoute,
  ...widthSearchRoute,
];

export default graphCategory;