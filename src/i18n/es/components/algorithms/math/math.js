import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Un algoritmo matemático se refiere a un conjunto de reglas y procedimientos diseñados para resolver problemas matemáticos. Estos algoritmos manipulan datos numéricos y utilizan operaciones matemáticas para realizar cálculos y análisis. <br> <br>`,
  b: "Los algoritmos matemáticos son esenciales en diversas disciplinas donde se requiere realizar operaciones numéricas y resolver ecuaciones. <br> <br>",
  c: "Existen varias categorías de algoritmos matemáticos, cada una con su enfoque específico. Algunas de las categorías comunes son: <br> <br>",
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Algoritmos de Cálculo</p>`,
  b: `<p class="${classes.paddingP2}">Estos algoritmos se centran en realizar operaciones aritméticas y cálculos numéricos. Pueden incluir algoritmos para sumar, restar, multiplicar, dividir, así como para realizar operaciones más avanzadas como exponentes y raíces. </p> <br>`,
  c: `<p class="${classes.cP2}">Algoritmos de Álgebra</p>`,
  d: `<p class="${classes.paddingP2}">Esta categoría aborda la resolución de ecuaciones algebraicas y sistemas de ecuaciones. Los algoritmos en esta área pueden incluir métodos como sustitución, igualación y eliminación. </p> <br>`,
};

const p3 = {
  a: `Los algoritmos matemáticos encuentran aplicaciones prácticas en diversas áreas, como: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Ciencia e Investigación</p>`,
  c: `<p class="${classes.cP3}">2. Ingeniería y Tecnología</p>`,
  d: `<p class="${classes.cP3}">3. Finanzas y Economía</p>`,
  e: `<p class="${classes.cP3}">4. Estadísticas y Análisis de Datos</p>`,
  f: `<p class="${classes.cP3}">5. Computación Científica</p> <br>`,
};

const p4 = {
  a: `En resumen, los algoritmos matemáticos son herramientas fundamentales para abordar problemas numéricos en diversas disciplinas. Su aplicación abarca desde cálculos simples hasta solución de ecuaciones complejas, contribuyendo significativamente al progreso científico y tecnológico.`,
};

const defineMath = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defMath = joinProperties(defineMath);

export default defMath;
