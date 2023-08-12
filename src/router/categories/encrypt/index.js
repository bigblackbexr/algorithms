import { createRouter } from "vue-router";
import { hashPolinomialRoute } from "./hash-polinomial";

const encryptCategory = createRouter({
  routes: [
    ...hashPolinomialRoute,
  ]
});

export default encryptCategory;