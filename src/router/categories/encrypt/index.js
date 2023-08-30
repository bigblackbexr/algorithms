import encrypt from "@/components/algorithm.vue";

import hashPolinomialRoute from "./hash-polinomial";

const encryptCategory = [
  {
    path: '/encrypt',
    name: 'encrypt',
    component: encrypt,
    props: true
  },
  ...hashPolinomialRoute
];

export default encryptCategory;