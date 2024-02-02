import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Los algoritmos de ordenamiento desempeñan un papel crucial en la informática, proporcionando métodos para organizar elementos en un orden específico para una manipulación y recuperación eficientes de datos. <br> <br>`,
  b: "Existen varios algoritmos de ordenamiento, cada uno con sus propias fortalezas y casos de uso. <br> <br>",
  c: "Vamos a explorar los principales tipos de algoritmos de ordenamiento: <br> <br>",
};

const p2 = {
  a: `<p class="${classes.cP2}">Bubble Sort</p>`,
  b: `<p class="${classes.paddingP2}">También conocido como ordenamiento de burbuja, Bubble Sort es un algoritmo simple de comparación que recorre repetidamente la lista, compara elementos adyacentes y los intercambia si están en el orden incorrecto.</p> <br>`,
  c: `<p class="${classes.cP2}">Merge Sort</p>`,
  d: `<p class="${classes.paddingP2}">Merge Sort es un algoritmo de divide y vencerás. Divide la lista no ordenada en n sub-listas, cada una con un elemento, y luego fusiona repetidamente las sub-listas para producir nuevas sub-listas ordenadas hasta que solo queda una.</p> <br>`,
  e: `<p class="${classes.cP2}">Quick Sort</p>`,
  f: `<p class="${classes.paddingP2}">Quick Sort, otro algoritmo de divide y vencerás, funciona seleccionando un elemento 'pivote' del conjunto y dividiendo los demás elementos en dos subconjuntos según si son menores o mayores que el pivote.</p> <br>`,
  g: `<p class="${classes.cP2}">Selection Sort</p>`,
  h: `<p class="${classes.paddingP2}">Selection Sort es un simple algoritmo de ordenamiento basado en comparaciones que divide la lista de entrada en una región ordenada y una no ordenada. Selecciona repetidamente el elemento mínimo de la región no ordenada e intercambia con el primer elemento de la región no ordenada.</p> <br>`,
};

const p3 = {
  a: `Los algoritmos de ordenamiento encuentran aplicaciones en diversos escenarios, incluyendo: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Organización y Recuperación de Datos</p>`,
  c: `<p class="${classes.cP3}">2. Indexación de Bases de Datos</p>`,
  d: `<p class="${classes.cP3}">3. Algoritmos de Búsqueda</p>`,
  e: `<p class="${classes.cP3}">4. Presentación de Datos</p> <br>`,
};

const p4 = {
  a: `En resumen, los algoritmos de ordenamiento son herramientas esenciales en informática, ofreciendo formas eficientes de organizar y recuperar datos. Comprender los diferentes tipos de algoritmos de ordenamiento y sus aplicaciones es fundamental para desarrolladores y científicos de la computación.`,
};

const defineSort = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defSort = joinProperties(defineSort);

export default defSort;
