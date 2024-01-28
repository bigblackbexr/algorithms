import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Los algoritmos de búsqueda son fundamentales en la informática, centrándose en encontrar elementos o valores
      específicos dentro de colecciones de datos. Estos algoritmos desempeñan un papel vital en diversas aplicaciones y
      situaciones de resolución de problemas. <br> <br>`,
  b: `Son herramientas fundamentales para localizar eficientemente elementos en un conjunto de datos, contribuyendo
      significativamente a procesos de búsqueda optimizados.`,
  c: `Existen diferentes categorías de algoritmos de búsqueda, cada una con características y casos de uso específicos.
      Tipos comunes incluyen: <br> <br>`,
};

const p2 = {
  a: `<p class="${classes.cP2}">Búsqueda Lineal</p>`,
  b: `<p class="${classes.paddingP2}">La búsqueda lineal es un algoritmo simple que verifica secuencialmente cada elemento
      en una colección hasta encontrar una coincidencia o recorrer toda la colección. Es adecuada para listas no ordenadas.
      </p> <br>`,
  c: `<p class="${classes.cP2}">Búsqueda Binaria</p>`,
  d: `<p class="${classes.paddingP2}">La búsqueda binaria es un algoritmo eficiente aplicable a colecciones ordenadas.
      Divide repetidamente el espacio de búsqueda a la mitad, reduciendo el tiempo de búsqueda de manera logarítmica.
      </p> <br>`,
  e: `<p class="${classes.cP2}">Búsqueda en Profundidad (DFS)</p>`,
  f: `<p class="${classes.paddingP2}">DFS es un algoritmo utilizado para recorrer o buscar estructuras de árboles o grafos.
      Explora tan lejos como sea posible a lo largo de cada rama antes de retroceder.</p> <br>`,
  g: `<p class="${classes.cP2}">Búsqueda en Anchura (BFS)</p>`,
  h: `<p class="${classes.paddingP2}">BFS explora un grafo nivel por nivel, visitando todos los vecinos de un nodo antes
      de pasar al siguiente nivel. A menudo se utiliza en problemas de camino más corto.</p> <br>`,
  i: `<p class="${classes.cP2}">Hashing</p>`,
  j: `<p class="${classes.paddingP2}">Hashing implica asignar claves a índices mediante una función hash. Permite la
      recuperación rápida de datos, siendo una técnica eficiente de búsqueda para conjuntos de datos grandes.</p> <br>`,
  k: `<p class="${classes.cP2}">Búsqueda por Interpolación</p>`,
  l: `<p class="${classes.paddingP2}">La búsqueda por interpolación es una mejora sobre la búsqueda binaria, especialmente
      para conjuntos de datos distribuidos de manera uniforme. Utiliza fórmulas de interpolación para adivinar la posición
      probable del objetivo.</p> <br>`,
  m: `<p class="${classes.cP2}">Búsqueda Exponencial</p>`,
  n: `<p class="${classes.paddingP2}">La búsqueda exponencial es particularmente útil para listas no acotadas o infinitas.
      Implica duplicar repetidamente el índice hasta encontrar un rango, seguido de una búsqueda binaria.</p> <br>`,
  o: `<p class="${classes.cP2}">Búsqueda por Salto</p>`,
  p: `<p class="${classes.paddingP2}">La búsqueda por salto es eficiente para arreglos ordenados. Divide el arreglo en
      bloques más pequeños y realiza una búsqueda lineal en el bloque seleccionado donde podría estar el objetivo.</p> <br>`,
};

const p3 = {
  a: `Estos algoritmos de búsqueda encuentran aplicaciones prácticas en diversas áreas, tales como: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Recuperación de Información</p>`,
  c: `<p class="${classes.cP3}">2. Minería de Datos</p>`,
  d: `<p class="${classes.cP3}">3. Consultas de Bases de Datos</p>`,
  e: `<p class="${classes.cP3}">4. Inteligencia Artificial</p>`,
  f: `<p class="${classes.cP3}">5. Enrutamiento de Redes</p> <br>`,
};

const p4 = {
  a: `En resumen, los algoritmos de búsqueda son fundamentales para localizar elementos o valores específicos dentro de
      colecciones de datos. Se utilizan en diversas aplicaciones, desde la recuperación de información hasta el enrutamiento
      de redes, contribuyendo significativamente a la resolución eficiente de problemas.`,
};

const defineSearch = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSearch = joinProperties(defineSearch);

export default defSearch;
