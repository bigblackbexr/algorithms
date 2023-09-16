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

      let a = 'This is a testing.'

      const firstText = a

      new typed('.defineGraph', {
        strings: [firstText],
        typeSpeed: 25,
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
