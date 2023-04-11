<template>
  <div>

    <br>
    <h1>
      <pre class="grid place-content-center -mt-18 max-md:-mt-0 text-xl max-md:text-[8px] max-md:leading-[10px]">
███████╗ ██████╗ ██████╗ ████████╗
██╔════╝██╔═══██╗██╔══██╗╚══██╔══╝
███████╗██║   ██║██████╔╝   ██║   
╚════██║██║   ██║██╔══██╗   ██║   
███████║╚██████╔╝██║  ██║   ██║   
╚══════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
      </pre>
    </h1>

    <div class="text-orange-dark dark:text-purple-light mx-10 max-md:mx-6 my-5 text-xl max-md:text-base text-justify">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae labore sit eius voluptates molestiae eligendi, reiciendis, hic nisi dolores doloremque quasi cupiditate explicabo rem quidem veniam nulla vel molestias.
      </p>

      <br>

      <div class="grid grid-cols-2 gap-4 max-md:gap-2 place-content-stretch justify-items-center
                  max-md:flex max-md:flex-col text-center">
        <RouterLink :to="`sort/${algorithm}`" v-for="algorithm in algorithms" 
          class="w-full rounded-lg max-md:text-sm p-4 max-md:p-2 bg-orange-light text-orange-dark dark:bg-purple-light dark:text-vampire-dark
                 hover:animate-pulse">
            <p class="capitalize">
              {{ algorithm }}
            </p>
        </RouterLink >
      </div>
    </div>

  </div>
</template>

<script>

  import { RouterLink } from 'vue-router'

  export default {
    data () {
      return {
        algorithms: [
          'bubble',
          'by-selection',
          'insertion',
          'heap',
          'merge',
          'quicksort',
          'shellsort',
          'by-accounts',
          'radix'
        ]
      }
    }
  }

</script>