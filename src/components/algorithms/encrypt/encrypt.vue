<template>
  <div>
    <h1>
      <pre class="grid place-content-center -mt-18 max-md:-mt-0 text-xl max-md:text-[8px] max-md:leading-[10px]"> 
███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗██████╗ ████████╗
██╔════╝████╗  ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝
█████╗  ██╔██╗ ██║██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║   
██╔══╝  ██║╚██╗██║██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║   
███████╗██║ ╚████║╚██████╗██║  ██║   ██║   ██║        ██║   
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝   
      </pre>    
    </h1>

    <p>
      <span class="typed"></span>
    </p>

  </div>
</template>

<script>
  import Typed from 'typed.js'

  export default {
    data () {
      return {
        holaMundo: '¡Hola!, Mundo'
      }
    },
    mounted () {
      const typed = new Typed('.typed', {
        strings: ['Hello!, world :)'],
        typeSpeed: 100
      })
    }
  }
</script>
