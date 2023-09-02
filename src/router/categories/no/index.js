import no from "@/components/algorithm.vue";

import jumpingGameRoute from "./jumping-game";
import knightTourRoute from "./knight-tour";
import nQueensProblemRoute from "./n-queens-problem";
import rainTerracesRoute from "./rain-terraces";
import squareMatrixRotationRoute from "./square-matrix-rotation";
import towerHanoiRoute from "./tower-hanoi";
import uniquePathsRoute from "./unique-paths";

const noCategory = [
  {
    path: '/no',
    name: 'no',
    component: no,
    props: true
  },
  ...jumpingGameRoute,
  ...knightTourRoute,
  ...nQueensProblemRoute,
  ...rainTerracesRoute,
  ...squareMatrixRotationRoute,
  ...towerHanoiRoute,
  ...uniquePathsRoute,
];

export default noCategory;