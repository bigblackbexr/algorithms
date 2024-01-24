import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Los algoritmos de conjuntos son fundamentales en la informática, centrándose en operaciones relacionadas con conjuntos, que son colecciones
      de elementos únicos. Estos algoritmos desempeñan un papel vital en diversas aplicaciones y escenarios de resolución de problemas. <br> <br>`,
  b: `Son herramientas fundamentales para realizar de manera eficiente operaciones como unión, intersección, diferencia y más en conjuntos.`,
  c: `Existen diferentes categorías de algoritmos de conjuntos, cada una con características y casos de uso específicos. Tipos comunes
      incluyen: <br> <br>`,
};

const p2 = {
  a: `<p class="${classes.cP2}">Unión</p>`,
  b: `<p class="${classes.paddingP2}">La operación de unión combina dos conjuntos, dando como resultado un nuevo conjunto que contiene todos
      los elementos únicos de ambos conjuntos.</p> <br>`,
  c: `<p class="${classes.cP2}">Intersección</p>`,
  d: `<p class="${classes.paddingP2}">La operación de intersección encuentra elementos comunes entre dos conjuntos, creando un nuevo conjunto
      con esos elementos comunes.</p> <br>`,
  e: `<p class="${classes.cP2}">Diferencia</p>`,
  f: `<p class="${classes.paddingP2}">La operación de diferencia produce un nuevo conjunto con elementos presentes en el primer conjunto pero
      no en el segundo conjunto.</p> <br>`,
  g: `<p class="${classes.cP2}">Verificación de Subconjunto</p>`,
  h: `<p class="${classes.paddingP2}">La verificación de subconjunto determina si un conjunto es un subconjunto de otro, indicando si todos
      los elementos del primer conjunto están en el segundo conjunto.</p> <br>`,
  i: `<p class="${classes.cP2}">Diferencia Simétrica</p>`,
  j: `<p class="${classes.paddingP2}">La operación de diferencia simétrica produce un nuevo conjunto con elementos que son únicos para cada
      uno de los conjuntos de entrada.</p> <br>`,
};

const p3 = {
  a: `Estos algoritmos de conjuntos encuentran aplicaciones prácticas en diversas áreas, como: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Operaciones de Base de Datos</p>`,
  c: `<p class="${classes.cP3}">2. Problemas de Satisfacción de Restricciones</p>`,
  d: `<p class="${classes.cP3}">3. Análisis de Flujo de Red</p>`,
  e: `<p class="${classes.cP3}">4. Diseño de VLSI</p>`,
  f: `<p class="${classes.cP3}">5. Teoría de Juegos</p> <br>`,
};

const p4 = {
  a: `En resumen, los algoritmos de conjuntos son fundamentales para realizar operaciones en conjuntos, facilitando tareas como unión, intersección
      y más. Se aplican en diversas áreas, desde operaciones de base de datos hasta teoría de juegos, contribuyendo significativamente a la
      resolución eficiente de problemas.`,
};

const defineSet = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSet = joinProperties(defineSet);

export default defSet;
