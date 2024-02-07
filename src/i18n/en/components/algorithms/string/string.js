import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: ``,
  b: ``,
  c: ``,
};

const p2 = {
  a: ``,
  b: ``,
  c: ``,
};

const p3 = {
  a: ``,
  b: ``,
  c: ``,
};

const p4 = {
  a: ``,
  b: ``,
  c: ``,
};

const defineString = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defString = joinProperties(defineString);

export default defString;
