import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `A mathematical algorithm refers to a set of rules and procedures designed to solve mathematical problems. These algorithms manipulate numerical data and use mathematical operations to perform calculations and analyses. <br> <br>`,
  b: "Mathematical algorithms are essential in various disciplines where numerical operations and equation solving are required. <br> <br>",
  c: "There are several categories of mathematical algorithms, each with its specific focus. Some common categories include: <br> <br>",
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Calculation Algorithms</p>`,
  b: `<p class="${classes.paddingP2}">These algorithms focus on performing arithmetic operations and numerical calculations. They may include algorithms for addition, subtraction, multiplication, division, as well as more advanced operations like exponents and roots. </p> <br>`,
  c: `<p class="${classes.cP2}">Algebra Algorithms</p>`,
  d: `<p class="${classes.paddingP2}">This category addresses the solution of algebraic equations and systems of equations. Algorithms in this area may include methods such as substitution, equalization, and elimination. </p> <br>`,
};

const p3 = {
  a: `Mathematical algorithms find practical applications in various areas, such as: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Science and Research</p>`,
  c: `<p class="${classes.cP3}">2. Engineering and Technology</p>`,
  d: `<p class="${classes.cP3}">3. Finance and Economics</p>`,
  e: `<p class="${classes.cP3}">4. Statistics and Data Analysis</p>`,
  f: `<p class="${classes.cP3}">5. Scientific Computing</p> <br>`,
};

const p4 = {
  a: `In summary, mathematical algorithms are fundamental tools for addressing numerical problems in various disciplines. Their application ranges from simple calculations to the solution of complex equations, contributing significantly to scientific and technological progress.`,
};

const defineMath = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defMath = joinProperties(defineMath);

export default defMath;
