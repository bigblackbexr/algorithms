<template>
  <div>
    <div class="absolute inset-x-4 top-28 bottom-24 overflow-auto">
      <div class="relative max-md:mr-2">

        <nav class="text-orange-dark dark:text-purple-dark">
          <div class="absolute max-md:left-0 left-4">
            <div class="rounded-lg bg-orange-light dark:bg-purple-light px-4">
              <ol class="inline-flex items-center space-x-1 md:space-x-3
                        max-md:h-10">
                <li>
                  <div class="inline-flex items-center text-sm">
                    <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    <p class="max-md:mt-1">
                      Home
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center text-sm">
                    <svg aria-hidden="true" class="w-6 h-6 max-md:w-5 max-md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <p class="capitalize ml-1 md:ml-2">
                      {{ folder }}
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div class="absolute max-md:right-0 right-4">
            <button @click="getBack()"
              class="rounded-lg max-md:w-10 w-20 max-md:h-10 h-8 bg-orange-light text-orange-dark dark:bg-purple-light dark:text-purple-dark">
              <div class="grid place-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="max-md:w-4 max-md:h-4 w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
              </div>
            </button>
          </div>
        </nav>


        <div class="max-md:pt-12 pt-10 max-md:mx-0 mx-4">
          <div class="rounded-lg border-solid border-2 dark:border-purple-light]">
            <div class="m-2">

              <div v-show="folder === 'encrypt'">
                <Encrypt />
              </div>

              <div v-show="folder === 'graph'">
                <Graph />
              </div>

              <div v-show="folder === 'list'">
                <List />
              </div>

              <div v-show="folder === 'math'">
                <Math />
              </div>

              <div v-show="folder === 'no'">
                <No />
              </div>

              <div v-show="folder === 'search'">
                <Search />
              </div>

              <div v-show="folder === 'set'">
                <Set />
              </div>

              <div v-show="folder === 'sort'">
                <Sort />
              </div>

              <div v-show="folder === 'string'">
                <String />
              </div>

              <div v-show="folder === 'tree'">
                <Tree />
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
	import Encrypt from './algorithms/encrypt/encrypt.vue'
	import Graph from './algorithms/graph/graph.vue'
	import List from './algorithms/list/list.vue'
	import Math from './algorithms/math/math.vue'
	import No from './algorithms/no/no.vue'
	import Search from './algorithms/search/search.vue'
	import Set from './algorithms/set/set.vue'
	import Sort from './algorithms/sort/sort.vue'
	import String from './algorithms/string/string.vue'
	import Tree from './algorithms/tree/tree.vue'

  export default {
    components: {
      Encrypt,
      Graph,
      List,
      Math,
      No,
      Search,
      Set,
      Sort,
      String,
      Tree
    },
    data () {
      return {
        folder: ''
      }
    },
    methods: {
      getFolder () {
        this.folder = this.$route.name
      },
      getBack () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.getFolder()
    }
  }

</script>
