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
        <button @click="getFolders()" class="bg-cyan">
          botones
        </button>
      </main>
    </div>
  </div>
</template>

<script>
  import fs from 'fs'

  export default {
    data () {
      return {
        folders: [],
      }
    },
    methods: {
      getFolders () {
        console.log('si entre');
        const testFolder = '.';

        fs.readdir(testFolder, (err, files) => {
          files.forEach(file => {
            console.log(file);
          });
        });
      }
    },
    mounted () {
      console.log('hola');
      // this.getFolders()
    }
  }
</script>