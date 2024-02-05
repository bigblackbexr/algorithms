import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Sorting algorithms play a crucial role in computer science, providing methods to arrange elements in a specific order for efficient data manipulation and retrieval. <br> <br>`,
  b: "Various sorting algorithms exist, each with its own strengths and use cases. <br> <br>",
  c: "Let's explore the main types of sorting algorithms: <br> <br>",
};

const p2 = {
  a: `<p class="${classes.cP2}">Bubble Sort</p>`,
  b: `<p class="${classes.paddingP2}">Also known as sinking sort, Bubble Sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p> <br>`,
  c: `<p class="${classes.cP2}">Merge Sort</p>`,
  d: `<p class="${classes.paddingP2}">Merge Sort is a divide and conquer algorithm. It divides the unsorted list into n sub-lists, each containing one element, and then repeatedly merges sub-lists to produce new sorted sub-lists until there is only one remaining.</p> <br>`,
  e: `<p class="${classes.cP2}">Quick Sort</p>`,
  f: `<p class="${classes.paddingP2}">Quick Sort, another divide and conquer algorithm, works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.</p> <br>`,
  g: `<p class="${classes.cP2}">Selection Sort</p>`,
  h: `<p class="${classes.paddingP2}">Selection Sort is a simple in-place comparison-based sorting algorithm that divides the input list into a sorted and an unsorted region. It repeatedly selects the minimum element from the unsorted region and swaps it with the first element of the unsorted region.</p> <br>`,
};

const p3 = {
  a: `Sorting algorithms find applications in various scenarios, including: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Data Organization and Retrieval</p>`,
  c: `<p class="${classes.cP3}">2. Database Indexing</p>`,
  d: `<p class="${classes.cP3}">3. Search Algorithms</p>`,
  e: `<p class="${classes.cP3}">4. Data Presentation</p> <br>`,
};

const p4 = {
  a: `In summary, sorting algorithms are essential tools in computer science, offering efficient ways to organize and retrieve data. Understanding the different types of sorting algorithms and their applications is fundamental for developers and computer scientists.`,
};

const defineSort = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSort = joinProperties(defineSort);

export default defSort;
