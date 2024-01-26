import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Search algorithms are crucial in computer science, focusing on finding specific items or values within data collections.
      These algorithms play a vital role in various applications and problem-solving scenarios. <br> <br>`,
  b: `They are fundamental tools for efficiently locating elements in a dataset, contributing significantly to optimized search processes.`,
  c: `There are different categories of search algorithms, each with specific characteristics and use cases. Common types include: <br> <br>`,
};

const p2 = {
  a: `<p class="${classes.cP2}">Linear Search</p>`,
  b: `<p class="${classes.paddingP2}">Linear search is a simple algorithm that sequentially checks each element in a collection until a match
      is found or the entire collection is traversed. It is suitable for unordered lists.</p> <br>`,
  c: `<p class="${classes.cP2}">Binary Search</p>`,
  d: `<p class="${classes.paddingP2}">Binary search is an efficient algorithm applicable to sorted collections. It repeatedly divides the search
      space in half, reducing the search time logarithmically.</p> <br>`,
  e: `<p class="${classes.cP2}">Depth-First Search (DFS)</p>`,
  f: `<p class="${classes.paddingP2}">DFS is an algorithm used for traversing or searching tree or graph structures. It explores as far as possible
      along each branch before backtracking.</p> <br>`,
  g: `<p class="${classes.cP2}">Breadth-First Search (BFS)</p>`,
  h: `<p class="${classes.paddingP2}">BFS explores a graph level by level, visiting all neighbors of a node before moving on to the next level.
      It is often used in shortest path problems.</p> <br>`,
  i: `<p class="${classes.cP2}">Hashing</p>`,
  j: `<p class="${classes.paddingP2}">Hashing involves mapping keys to indices using a hash function. It enables quick retrieval of data, making
      it an efficient search technique for large datasets.</p> <br>`,
  k: `<p class="${classes.cP2}">Interpolation Search</p>`,
  l: `<p class="${classes.paddingP2}">Interpolation search is an improvement over binary search, especially for uniformly distributed datasets.
      It uses interpolation formulae to guess the likely position of the target.</p> <br>`,
  m: `<p class="${classes.cP2}">Exponential Search</p>`,
  n: `<p class="${classes.paddingP2}">Exponential search is particularly useful for unbounded or infinite lists. It involves repeatedly doubling
      the index until a range is found, followed by a binary search.</p> <br>`,
  o: `<p class="${classes.cP2}">Jump Search</p>`,
  p: `<p class="${classes.paddingP2}">Jump search is efficient for sorted arrays. It divides the array into smaller blocks and performs linear
      search in the selected block where the target may exist.</p> <br>`,
};

const p3 = {
  a: `These search algorithms find practical applications in various areas, such as: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Information Retrieval</p>`,
  c: `<p class="${classes.cP3}">2. Data Mining</p>`,
  d: `<p class="${classes.cP3}">3. Database Querying</p>`,
  e: `<p class="${classes.cP3}">4. Artificial Intelligence</p>`,
  f: `<p class="${classes.cP3}">5. Network Routing</p> <br>`,
};

const p4 = {
  a: `In summary, search algorithms are fundamental in locating specific items or values within data collections. They are utilized in various
      applications, ranging from information retrieval to network routing, contributing significantly to efficient problem-solving.`,
};

const defineSearch = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSearch = joinProperties(defineSearch);

export default defSearch;
