<template>
  <div class="h-full max-md:mr-2">
    <div class="h-full flex flex-col justify-between">
      <nav class="flex flex-col h-3/6">
        <div class="h-full m-40 max-md:m-10 max-md:p-0 p-10"
        >
          <div class="bg-logo-light dark:bg-logo-dark mx-auto w-40 h-40 bg-center bg-no-repeat">
            &nbsp
          </div>
          <p class="text-4xl text-center">
            Algorithms
          </p>
          <p class="text-md max-md:text-lg text-center relative animate-pulse text-orange-dark dark:text-purple-light">
            v0.0
          </p>
        </div>
      </nav>

      <main>
        <div class="columns-5 max-md:flex max-md:flex-col mt-16 max-md:mt-8">
          <div v-for="folder in folders" class="max-md:py-1 py-2 grid place-items-center">
            <RouterLink :to="`${folder}`" class="w-full max-md:p-2 p-6 rounded-lg text-center bg-orange-light text-orange-dark dark:bg-purple-light dark:text-purple-dark">
              <p class="capitalize">
                {{ folder }}
              </p>
            </RouterLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router';

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
    }
  }
  
</script>