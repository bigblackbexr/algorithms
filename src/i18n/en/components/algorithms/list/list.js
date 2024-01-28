import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `A list algorithm comprises a set of principles and computational procedures crafted for the analysis and manipulation of data
    organized in the format of a list. A list, in this context, stands as a sequential arrangement of elements, each uniquely
    identified by its index or position. <br> <br>`,
  b: "These algorithms play a pivotal role in diverse fields and applications where data exhibits a list-based structure. <br> <br>",
  c: "There exist two primary categories of list algorithms: <br> <br>",
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Exploration and Identification</p>`,
  b: `<p class="${classes.paddingP2}">These algorithms serve the purpose of seeking out specific elements or characteristics within
    a given list. They can ascertain the presence of an element, pinpoint its position within the list, or extract elements that
    meet predefined criteria. </p> <br>`,
  c: `<p class="${classes.cP2}">Arrangement and Transformation</p>`,
  d: `<p class="${classes.paddingP2}">This category focuses on the systematic organization of elements or the execution of operations
    on the list. Sorting algorithms, for instance, streamline the arrangement of elements in either ascending or descending order.
    Meanwhile, transformative algorithms can include tasks such as the addition or removal of elements. </p> <br>`,
};

const p3 = {
  a: `List algorithms find practical applications across various domains, including: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Data Governance Systems</p>`,
  c: `<p class="${classes.cP3}">2. Knowledge Retrieval</p>`,
  d: `<p class="${classes.cP3}">3. Automated Task and Scheduling</p>`,
  e: `<p class="${classes.cP3}">4. Textual Processing and Analysis</p>`,
  f: `<p class="${classes.cP3}">5. Inventory Oversight</p> <br>`,
};

const p4 = {
  a: `In essence, list algorithms represent indispensable tools for dissecting and reshaping data manifesting in list form. Their
    adaptability positions them as essential components within a myriad of applications spanning different disciplines.`,
};

const defineList = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defList = joinProperties(defineList);

export default defList;
