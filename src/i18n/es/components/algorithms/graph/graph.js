import joinProperties from '@/utils/join-properties'

const classes = {
  paddingP2: 'px-12 max-md:px-6',
  textColorP2: 'text-red dark:text-pink',
  cP2: 'px-12 max-md:px-6 text-red dark:text-pink',
  cp3: 'px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light'
}

const p1 = {
  a:
    `Un algoritmo de tipo gráfico es un conjunto de reglas y procedimientos matemáticos diseñados para analizar y manipular datos
    representados en forma de grafo. Un grafo es una estructura compuesta por nodos (vértices) y conexiones (aristas) que representan
    relaciones entre estos nodos. <br> <br>`,
  b:
    'Estos algoritmos son esenciales en una variedad de campos y aplicaciones donde se manejan datos con estructura de grafo. <br> <br>',
  c:
    'Existen dos categorías principales de algoritmos de tipo gráfico: <br> <br>'
}

const p2 = {
  a: `
    <p class="${classes.cP2}">Búsqueda y Exploración</p>`,
  b:
    `<p class="${classes.paddingP2}">Estos algoritmos se utilizan para buscar caminos, relaciones o características específicas dentro de
    un grafo. Pueden emplearse para determinar si existe una ruta entre dos nodos, encontrar el camino más corto entre nodos, o explorar
    la estructura completa del grafo. </p> <br>`,
  c:
    `<p class="${classes.cP2}">Procesamiento y Análisis</p>`,
  d:
    `<p class="${classes.paddingP2}">Estos algoritmos se centran en extraer información significativa de los datos del grafo. Pueden incluir
    algoritmos de detección de comunidades para identificar grupos de nodos con conexiones fuertes, algoritmos de análisis de centralidad
    para encontrar nodos clave en el grafo, o algoritmos de clustering para agrupar nodos similares. </p> <br>`
}

const p3 = {
  a:
    `Los algoritmos de tipo gráfico se aplican en diversas áreas, incluyendo: <br> <br>`,
  b:
    `<p class="${classes.cp3}">1.Redes Sociales</p>`,
  c:
    `<p class="${classes.cp3}">2.Transporte y Logística</p>`,
  d:
    `<p class="${classes.cp3}">3.Biología Computacional</p>`,
  e:
    `<p class="${classes.cp3}">4.Recomendación de Contenido</p>`,
  f:
    `<p class="${classes.cp3}">5.Análisis de Redes</p> <br>`
}

const p4 = {
  a:
    `En general, los algoritmos de tipo gráfico son herramientas esenciales para analizar y comprender datos representados en forma de grafo,
    y su versatilidad los convierte en elementos fundamentales en una amplia variedad de aplicaciones y disciplinas.`
}

const defineGraph = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
}

const defGraph = joinProperties(defineGraph);

export default defGraph;
