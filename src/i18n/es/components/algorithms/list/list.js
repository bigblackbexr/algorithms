import joinProperties from '@/utils/join-properties';
import classes from '@/utils/classes-definition';

const p1 = {
  a:
    `Un algoritmo de listas consiste en un conjunto de reglas y procedimientos matemáticos diseñados para analizar y manipular datos
    representados en forma de lista. Una lista es una estructura lineal compuesta por elementos, cada uno identificado por su índice
    o posición. <br> <br>`,
  b:
    'Estos algoritmos son fundamentales en diversas áreas y aplicaciones donde los datos presentan una estructura de lista. <br> <br>',
  c:
    'Existen dos categorías principales de algoritmos de listas: <br> <br>'
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Exploración e Identificación</p>`,
  b:
    `<p class="${classes.paddingP2}">Estos algoritmos tienen como objetivo buscar elementos o características específicas dentro de
    una lista dada. Pueden determinar la presencia de un elemento, señalar su posición dentro de la lista o extraer elementos que
    cumplan con criterios predefinidos. </p> <br>`,
  c:
    `<p class="${classes.cP2}">Organización y Transformación</p>`,
  d:
    `<p class="${classes.paddingP2}">Esta categoría se centra en la organización sistemática de elementos o en la ejecución de operaciones
    en la lista. Los algoritmos de ordenación, por ejemplo, facilitan la disposición de elementos en orden ascendente o descendente.
    Mientras tanto, los algoritmos de transformación pueden incluir tareas como la adición o eliminación de elementos. </p> <br>`
};

const p3 = {
  a:
    `Los algoritmos de listas encuentran aplicaciones prácticas en diversas áreas, como: <br> <br>`,
  b:
    `<p class="${classes.cp3}">1. Sistemas de Gestión de Datos</p>`,
  c:
    `<p class="${classes.cp3}">2. Recuperación de Información</p>`,
  d:
    `<p class="${classes.cp3}">3. Automatizada de Tareas y Programación</p>`,
  e:
    `<p class="${classes.cp3}">4. Procesamiento y Análisis de Texto</p>`,
  f:
    `<p class="${classes.cp3}">5. Gestión de Inventarios</p> <br>`
};

const p4 = {
  a:
    `En resumen, los algoritmos de listas representan herramientas indispensables para analizar y dar forma a datos representados en forma
    de lista. Su adaptabilidad los posiciona como componentes esenciales en una variedad de aplicaciones que abarcan diferentes disciplinas.`
};

const defineList = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defList = joinProperties(defineList);

export default defList;
