import joinProperties from '@/utils/join-properties';
import classes from '@/utils/classes-definition';

const p1 = {
  a:
    `The "Uncategorized" category includes a diverse set of algorithms that don't neatly fit into predefined classifications. These algorithms showcase various problem-solving techniques and find applications across different domains. <br> <br>`,
  b:
    'Explore some notable algorithms within this category below: <br> <br>',
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Towers of Hanoi</p>`,
  b:
    `<p class="${classes.paddingP2}">The Towers of Hanoi is a classic algorithmic problem that involves moving a stack of discs from one rod to another, subject to specific constraints. It serves as an excellent example of recursive problem-solving.</p> <br>`,
  c:
    `<p class="${classes.cP2}">In-place Rotation of Square Matrix</p>`,
  d:
    `<p class="${classes.paddingP2}">This algorithm focuses on rotating a square matrix in place, demonstrating efficient manipulation of array elements without requiring additional space. It's commonly used in image processing and computer graphics.</p> <br>`,
  e:
    `<p class="${classes.cP2}">Game of Jumps</p>`,
  f:
    `<p class="${classes.paddingP2}">The Game of Jumps encompasses examples of backtracking, dynamic programming (both top-down and bottom-up approaches), and greedy algorithms. It provides insights into solving problems with varying complexity using different strategies.</p> <br>`,
  g:
    `<p class="${classes.cP2}">Unique Paths</p>`,
  h:
    `<p class="${classes.paddingP2}">The Unique Paths algorithm explores multiple solutions using backtracking and dynamic programming. It is particularly relevant in scenarios where finding unique paths in a grid is essential, such as robotics and route planning.</p> <br>`,
  i:
    `<p class="${classes.cP2}">Rain Terraces</p>`,
  j:
    `<p class="${classes.paddingP2}">The Rain Terraces problem addresses rainwater retention on terraced buildings. Solutions involve dynamic programming and brute-force methods, showcasing different approaches to tackle a real-world scenario.</p> <br>`,
  k:
    `<p class="${classes.cP2}">N-Queens Problem</p>`,
  l:
    `<p class="${classes.paddingP2}">The N-Queens Problem involves placing N chess queens on an N×N chessboard in such a way that no two queens threaten each other. It is a classic problem in combinatorial optimization and requires careful consideration of possible solutions.</p> <br>`,
  m:
    `<p class="${classes.cP2}">Knight's Tour Problem</p>`,
  n:
    `<p class="${classes.paddingP2}">The Knight's Tour is a mathematical problem involving a knight on a chessboard. The task is to make a sequence of moves, visiting each square exactly once. It's a great illustration of algorithmic problem-solving in a constrained environment.</p> <br>`
};

const p3 = {
  a:
    `In summary, the algorithms in the "Uncategorized" category demonstrate the versatility and adaptability of algorithmic approaches. They showcase creative solutions to various problems and contribute to the broader landscape of algorithm design and implementation.`,
};

const defineNo = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
};

const defNo = joinProperties(defineNo);

export default defNo;
