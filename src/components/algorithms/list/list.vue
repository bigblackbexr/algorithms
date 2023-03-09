<template>
  <div>
    <br>
    <h1>
      <pre class="grid place-content-center -mt-18 max-md:-mt-0 text-xl max-md:text-[8px] max-md:leading-[10px]">
██╗     ██╗███████╗████████╗
██║     ██║██╔════╝╚══██╔══╝
██║     ██║███████╗   ██║   
██║     ██║╚════██║   ██║   
███████╗██║███████║   ██║   
╚══════╝╚═╝╚══════╝   ╚═╝   
      </pre>    
    </h1>

    <div class="mx-10 max-md:mx-6 my-5 text-cyan text-xl max-md:text-base text-justify">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae labore sit eius voluptates molestiae eligendi, reiciendis, hic nisi dolores doloremque quasi cupiditate explicabo rem quidem veniam nulla vel molestias.
      </p>

      <br>

      <div class="grid grid-cols-2 gap-4 place-content-stretch justify-items-center">
        <div v-for="algorithm in algorithms" class="rounded-lg p-4 max-md:px-1 max-md:py-2 dark:bg-orange-light dark:text-orange-dark">
          <RouterLink :to="`list/${algorithm}`">
            <p class="capitalize">
              {{ algorithm }}
            </p>
          </RouterLink>
        </div>
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
          'direct-route',
          'invert-route',
        ]
      }
    }
  }

</script>