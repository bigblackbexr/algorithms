import encryptCategory from "./encrypt/index";
import graphCategory from "./graph/index";
import listCategory from "./list/index";
import mathCategory from "./math/index";
import noCategory from "./no/index";

const allRoutes = [
  ...encryptCategory,
  ...graphCategory,
  ...listCategory,
  ...mathCategory,
  ...noCategory
];

export default allRoutes;