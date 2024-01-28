import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Set algorithms are crucial in computer science, focusing on operations related to sets, which are collections of unique elements.
      These algorithms play a vital role in various applications and problem-solving scenarios. <br> <br>`,
  b: `They are fundamental tools for efficiently performing operations such as union, intersection, difference, and more on sets.`,
  c: `There are different categories of set algorithms, each with specific characteristics and use cases. Common types include: <br> <br>`,
};

const p2 = {
  a: `<p class="${classes.cP2}">Union</p>`,
  b: `<p class="${classes.paddingP2}">The union operation combines two sets, resulting in a new set containing all unique elements from both
      sets.</p> <br>`,
  c: `<p class="${classes.cP2}">Intersection</p>`,
  d: `<p class="${classes.paddingP2}">The intersection operation finds common elements between two sets, creating a new set with those common
      elements.</p> <br>`,
  e: `<p class="${classes.cP2}">Difference</p>`,
  f: `<p class="${classes.paddingP2}">The difference operation yields a new set with elements present in the first set but not in the second
      set.</p> <br>`,
  g: `<p class="${classes.cP2}">Subset Check</p>`,
  h: `<p class="${classes.paddingP2}">The subset check determines if one set is a subset of another, indicating whether all elements of the
      first set are in the second set.</p> <br>`,
  i: `<p class="${classes.cP2}">Symmetric Difference</p>`,
  j: `<p class="${classes.paddingP2}">The symmetric difference operation produces a new set with elements that are unique to each of the input
      sets.</p> <br>`,
};

const p3 = {
  a: `These set algorithms find practical applications in various areas, such as: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Database Operations</p>`,
  c: `<p class="${classes.cP3}">2. Constraint Satisfaction Problems</p>`,
  d: `<p class="${classes.cP3}">3. Network Flow Analysis</p>`,
  e: `<p class="${classes.cP3}">4. VLSI Design</p>`,
  f: `<p class="${classes.cP3}">5. Game Theory</p> <br>`,
};

const p4 = {
  a: `In summary, set algorithms are fundamental in performing operations on sets, facilitating tasks such as union, intersection, and more.
      They are utilized in various applications, ranging from database operations to game theory, contributing significantly to efficient problem-solving.`,
};

const defineSet = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSet = joinProperties(defineSet);

export default defSet;
