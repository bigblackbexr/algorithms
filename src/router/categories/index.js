import { createRouter } from "vue-router";
import { encryptCategory } from "./encrypt/index";

const allRoutes = createRouter({
  routes: [
    ...encryptCategory,
  ]
});

export default allRoutes;