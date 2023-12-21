import joinProperties from '@/utils/join-properties';
import classes from '@/utils/classes-definition';

const p1 = {
  a:
    `La categoría "Sin Categoría" incluye un conjunto diverso de algoritmos que no encajan fácilmente en clasificaciones predefinidas. Estos algoritmos muestran diversas técnicas de resolución de problemas y encuentran aplicaciones en diferentes ámbitos. <br> <br>`,
  b:
    'Explora algunos algoritmos destacados dentro de esta categoría a continuación: <br> <br>',
};

const p2 = {
  a: `
    <p class="${classes.cP2}">Torres de Hanoi</p>`,
  b:
    `<p class="${classes.paddingP2}">Las Torres de Hanoi es un problema algorítmico clásico que implica mover una pila de discos de una varilla a otra, sujeto a restricciones específicas. Sirve como un excelente ejemplo de resolución de problemas recursiva.</p> <br>`,
  c:
    `<p class="${classes.cP2}">Rotación In Situ de una Matriz Cuadrada</p>`,
  d:
    `<p class="${classes.paddingP2}">Este algoritmo se centra en rotar una matriz cuadrada en su lugar, demostrando una manipulación eficiente de los elementos del array sin requerir espacio adicional. Se utiliza comúnmente en procesamiento de imágenes y gráficos por computadora.</p> <br>`,
  e:
    `<p class="${classes.cP2}">Juego de los Saltos</p>`,
  f:
    `<p class="${classes.paddingP2}">El Juego de los Saltos abarca ejemplos de retroceso (backtracking), programación dinámica (tanto de arriba hacia abajo como de abajo hacia arriba) y enfoques voraces. Proporciona ideas para resolver problemas con distintas complejidades mediante estrategias diferentes.</p> <br>`,
  g:
    `<p class="${classes.cP2}">Caminos Únicos</p>`,
  h:
    `<p class="${classes.paddingP2}">El algoritmo de Caminos Únicos explora múltiples soluciones mediante retroceso y programación dinámica. Es particularmente relevante en escenarios donde encontrar caminos únicos en una cuadrícula es esencial, como en robótica y planificación de rutas.</p> <br>`,
  i:
    `<p class="${classes.cP2}">Terrazas Pluviales</p>`,
  j:
    `<p class="${classes.paddingP2}">El problema de las Terrazas Pluviales aborda la retención de agua de lluvia en edificaciones escalonadas. Las soluciones involucran programación dinámica y métodos de fuerza bruta, mostrando diferentes enfoques para abordar un escenario del mundo real.</p> <br>`,
  k:
    `<p class="${classes.cP2}">Problema de las N Reinas</p>`,
  l:
    `<p class="${classes.paddingP2}">El Problema de las N Reinas implica colocar N reinas de ajedrez en un tablero N×N de tal manera que ninguna amenace a otra. Es un problema clásico de optimización combinatoria que requiere una consideración cuidadosa de las posibles soluciones.</p> <br>`,
  m:
    `<p class="${classes.cP2}">Problema del Caballo (Knight Tour)</p>`,
  n:
    `<p class="${classes.paddingP2}">El Problema del Caballo en el tablero de ajedrez implica realizar una secuencia de movimientos, visitando cada casilla exactamente una vez. Es una excelente ilustración de resolución de problemas algorítmicos en un entorno restringido.</p> <br>`
};

const p3 = {
  a:
    `En resumen, los algoritmos en la categoría "Sin Categoría" demuestran la versatilidad y adaptabilidad de los enfoques algorítmicos. Muestran soluciones creativas a diversos problemas y contribuyen al panorama más amplio del diseño e implementación de algoritmos.`,
};

const defineNo = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
};

const defNo = joinProperties(defineNo)

export default defNo;
