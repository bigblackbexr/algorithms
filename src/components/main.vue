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
        <div class="text-md ml-40 max-md:ml-30">
          <span class="relative text-base animate-pulse text-green-dark dark:text-purple-light">
            v0.0
          </span>
        </div>
      </nav>

      <main>
        <div class="columns-5 max-md:flex max-md:flex-col mt-20 max-md:mt-8">
          <div v-for="folder in folders" class="py-1 grid place-items-center">
            <RouterLink :to="`${folder}`" class="w-full p-2 rounded-full text-center bg-green-light text-green-dark dark:bg-purple-light dark:text-purple-dark">
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