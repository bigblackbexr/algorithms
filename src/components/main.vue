<template>
  <div class="h-full">
    <div>
      <nav class="grid place-items-center">
        <div class="
          rounded-xl text-4xl p-10 pb-0
          max-md:p-8 max-md:pb-0"
        >
          <div class="bg-logo-light dark:bg-logo-dark mx-auto w-40 h-40 bg-center bg-no-repeat">
            &nbsp
          </div>
          Algorithms
        </div>
        <div class="text-md ml-36 max-md:ml-28">
          <span class="relative text-base">
            v0.0
            <span class="animate-pulse absolute mt-0.5 ml-0.5 rounded-full bg-green-light dark:bg-purple-light h-1.5 w-1.5"> </span>
          </span>
        </div>
      </nav>

      <main>
        <div class="columns-2 max-md:flex max-md:flex-col mt-8">
          <div v-for="folder in folders" class="py-1 grid place-items-center">
            <div class="w-10/12 max-md:w-full bg-purple-light p-2 rounded text-center text-purple-dark">
              <p class="capitalize">
                {{ folder }}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        folders: [
          'encrypt',
          'graph',
          'list',
          'math',
          'no',
          'search',
          'set',
          'sort',
          'string',
          'tree'
        ],
      }
    },
    methods: {
      getFolders () {
        console.log('si entre');
      }
    },
    mounted () {
      console.log('hola');
      // this.getFolders()
    }
  }
</script>