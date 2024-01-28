import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `A graph algorithm is a set of rules and mathematical procedures designed to analyze and manipulate data
    represented in the form of a graph. A graph is a structure composed of nodes (vertices) and connections (edges) that represent
    relationships between these nodes. <br> <br>`,
  b: "These algorithms are essential in a variety of fields and applications where data with a graph structure is handled. <br> <br>",
  c: "There are two main categories of graph algorithms: <br> <br>",
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Search and Exploration</p>`,
  b: `<p class="${classes.paddingP2}">These algorithms are used to search for paths, relationships, or specific features within
    a graph. They can be used to determine if there is a path between two nodes, find the shortest path between nodes, or explore
    the complete structure of the graph. </p> <br>`,
  c: `<p class="${classes.cP2}">Processing and Analysis</p>`,
  d: `<p class="${classes.paddingP2}">These algorithms focus on extracting meaningful information from graph data. They may include
    community detection algorithms to identify groups of nodes with strong connections, centrality analysis algorithms to find key nodes in the graph, or clustering algorithms to group similar nodes. </p> <br>`,
};

const p3 = {
  a: `Graph algorithms are applied in various areas, including: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Social Networks</p>`,
  c: `<p class="${classes.cP3}">2. Transportation and Logistics</p>`,
  d: `<p class="${classes.cP3}">3. Computational Biology</p>`,
  e: `<p class="${classes.cP3}">4. Content Recommendation</p>`,
  f: `<p class="${classes.cP3}">5. Network Analysis</p> <br>`,
};

const p4 = {
  a: `In general, graph algorithms are essential tools for analyzing and understanding data represented in the form of a graph,
    and their versatility makes them fundamental elements in a wide variety of applications and disciplines.`,
};

const defineGraph = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defGraph = joinProperties(defineGraph);

export default defGraph;
