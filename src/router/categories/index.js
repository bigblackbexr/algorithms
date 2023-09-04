import encryptCategory from "./encrypt/index";
import graphCategory from "./graph/index";
import listCategory from "./list/index";
import mathCategory from "./math/index";
import noCategory from "./no/index";
import searchCategory from "./search/index";

const allRoutes = [
  ...encryptCategory,
  ...graphCategory,
  ...listCategory,
  ...mathCategory,
  ...noCategory,
  ...searchCategory,
];

export default allRoutes;