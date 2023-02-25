<template>
  <div>
    <div class="absolute inset-x-4 top-28 bottom-24 overflow-auto">
  
      <div class="relative">
        <div class="absolute right-4">
          <button @click="getBack()" class="rounded-lg w-20 h-8 bg-green-light text-green-dark
                       dark:bg-purple-light dark:text-purple-dark">
            <div class="grid place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </div>
          </button>
        </div>

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
        console.log(this.folder)
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