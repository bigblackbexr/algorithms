import list from "@/components/algorithm.vue";

import directRouteRoute from "./direct-route";
import invertRouteRoute from "./invert-route";

const listCategory = [
  {
    path: '/list',
    name: 'list',
    component: list,
    props: true
  },
  ...directRouteRoute,
  ...invertRouteRoute
];

export default listCategory;