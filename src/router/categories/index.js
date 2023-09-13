import encryptCategory from "./encrypt/index";
import graphCategory from "./graph/index";
import listCategory from "./list/index";
import mathCategory from "./math/index";
import noCategory from "./no/index";
import searchCategory from "./search/index";
import setCategory from "./set/index";
import sortCategory from "./sort/index";
import stringCategory from "./string/index";
import treeCategory from "./tree/index";

const allRoutes = [
  ...encryptCategory,
  ...graphCategory,
  ...listCategory,
  ...mathCategory,
  ...noCategory,
  ...searchCategory,
  ...setCategory,
  ...sortCategory,
  ...stringCategory,
  ...treeCategory,
];

export default allRoutes;
