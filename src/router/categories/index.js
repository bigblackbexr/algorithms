import encryptCategory from "./encrypt/index";
import graphCategory from "./graph/index";
import listCategory from "./list/index";
import mathCategory from "./math/index";

const allRoutes = [
  ...encryptCategory,
  ...graphCategory,
  ...listCategory,
  ...mathCategory
];

export default allRoutes;