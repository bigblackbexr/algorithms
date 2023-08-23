import encryptCategory from "./encrypt/index";
import graphCategory from "./graph/index";
import listCategory from "./list/index";

const allRoutes = [
  ...encryptCategory,
  ...graphCategory,
  ...listCategory,
];

export default allRoutes;