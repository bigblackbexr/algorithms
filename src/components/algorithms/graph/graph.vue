<template>
  <div>

    <br>
    <h1>
      <pre class="grid place-content-center -mt-18 max-md:-mt-0 text-xl max-md:text-[8px] max-md:leading-[10px]">
 ██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗
██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║  ██║
██║  ███╗██████╔╝███████║██████╔╝███████║
██║   ██║██╔══██╗██╔══██║██╔═══╝ ██╔══██║
╚██████╔╝██║  ██║██║  ██║██║     ██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝
      </pre>
    </h1>

    <div class="text-orange-dark dark:text-purple-light mx-10 max-md:mx-6 my-5 text-xl max-md:text-base text-justify">
      <span class="defineGraph" />

      <br> <br>

      <div id="showGraph" class="hidden">

        <div class="grid grid-cols-2 gap-4 max-md:gap-2 place-content-stretch justify-items-center
                  max-md:flex max-md:flex-col text-center">
          <RouterLink :to="`graph/${algorithm}`" v-for="algorithm in algorithms"
            class="w-full rounded-lg max-md:text-sm p-4 max-md:p-2 bg-orange-light text-orange-dark dark:bg-purple-light dark:text-vampire-dark
                  hover:animate-pulse">
              <p class="capitalize">
                {{ algorithm }}
              </p>
          </RouterLink >
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import typed from 'typed.js';
  import { RouterLink } from 'vue-router'

  export default {
    data () {
      return {
        algorithms: [
          'bellman-ford',
          'bridges',
          'depth-search',
          'detect-cycles',
          'dijkstra',
          'eulerian-path-circuit',
          'floyd-warshall',
          'hamiltonian-cycle',
          'kruskal',
          'points-articulation',
          'prim',
          'strongly-connected-components',
          'topological-ordering',
          'traveler-problem',
          'width-search',
        ],
        item: null,
        items: ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔'],
      }
    },
    mounted () {
      this.item = this.items[Math.floor(Math.random()*this.items.length)]
      console.log(this.item);

      let a = 'Un algoritmo de tipo gráfico es un conjunto de reglas y procedimientos matemáticos diseñados para analizar y manipular datos representados en forma de grafo. Un grafo es una estructura compuesta por nodos (vértices) y conexiones (aristas) que representan relaciones entre estos nodos. <br> <br>'
      let b = 'Estos algoritmos son esenciales en una variedad de campos y aplicaciones donde se manejan datos con estructura de grafo. <br> <br>'
      let c = 'Existen dos categorías principales de algoritmos de tipo gráfico: <br> <br>'

      let d = '<p class="px-12 max-md:px-6 text-red dark:text-pink">Algoritmos de Búsqueda y Exploración</p>'
      let e = '<p class="px-12 max-md:px-6">Estos algoritmos se utilizan para buscar caminos, relaciones o características específicas dentro de un grafo. Pueden emplearse para determinar si existe una ruta entre dos nodos, encontrar el camino más corto entre nodos, o explorar la estructura completa del grafo. </p> <br>'
      let f = '<p class="px-12 max-md:px-6 text-red dark:text-pink">Algoritmos de Procesamiento y Análisis</p>'
      let g = '<p class="px-12 max-md:px-6">Estos algoritmos se centran en extraer información significativa de los datos del grafo. Pueden incluir algoritmos de detección de comunidades para identificar grupos de nodos con conexiones fuertes, algoritmos de análisis de centralidad para encontrar nodos clave en el grafo, o algoritmos de clustering para agrupar nodos similares. </p> <br>'

      let h = 'Los algoritmos de tipo gráfico se aplican en diversas áreas, incluyendo: <br> <br>'
      let i = '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">1.Redes Sociales</p>'
      let j = '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">2.Transporte y Logística</p>'
      let k = '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">3.Biología Computacional</p>'
      let l = '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">4.Recomendación de Contenido</p>'
      let m = '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">5.Análisis de Redes</p> <br>'

      let n = 'En resumen, los algoritmos de tipo gráfico son herramientas esenciales para analizar y comprender datos representados en forma de grafo, y su versatilidad los convierte en elementos fundamentales en una amplia variedad de aplicaciones y disciplinas.'

      const firstText = a + b + c
      const secondText = d + e + f + g
      const threeText = h + i + j + k + l + m
      const fourText = n

      new typed('.defineGraph', {
        strings: [firstText + secondText + threeText + fourText],
        typeSpeed: 0,
        cursorChar: this.item,
        loop: false,

        onComplete: () => {
          let show = document.getElementById('showGraph')
          show.classList.remove('hidden')
        }
      })
    }
  }

</script>
