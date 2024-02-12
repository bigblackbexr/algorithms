import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `String manipulation algorithms are essential in programming, providing methods to efficiently work with string data. <br> <br>`,
  b: "Within this category, there are various algorithms designed to perform specific operations on text strings. <br> <br>",
  c: "Let's explore some of the key string manipulation algorithms: <br> <br>",
};

const p2 = {
  a: `<p class="${classes.cP2}">String Length</p>`,
  b: `<p class="${classes.paddingP2}">Calculates the number of characters in a given string.</p> <br>`,
  c: `<p class="${classes.cP2}">Concatenation</p>`,
  d: `<p class="${classes.paddingP2}">Combines two or more strings to form a longer string.</p> <br>`,
  e: `<p class="${classes.cP2}">Substring</p>`,
  f: `<p class="${classes.paddingP2}">Extracts a specific part of a string.</p> <br>`,
  g: `<p class="${classes.cP2}">Substring Search</p>`,
  h: `<p class="${classes.paddingP2}">Determines if a substring is present in a larger string.</p> <br>`,
};

const p3 = {
  a: `String manipulation algorithms find applications in various contexts, including: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Text Processing</p>`,
  c: `<p class="${classes.cP3}">2. Text Data Analysis</p>`,
  d: `<p class="${classes.cP3}">3. Input Validation</p>`,
  e: `<p class="${classes.cP3}">4. Report Generation</p> <br>`,
};

const p4 = {
  a: `In summary, string manipulation algorithms are essential tools in programming, enabling effective operations on text data. Understanding these algorithms and their applications is fundamental for developers and programmers.`,
};

const defineStrings = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defStrings = joinProperties(defineStrings);

export default defStrings;
