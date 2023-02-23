<template>
  <div>
    <div class="absolute inset-x-4 top-28 bottom-24 overflow-auto">
  
      <div v-show="folder === 'encrypt'">
        <encrypt />
      </div>

      <div v-show="folder === 'graph'">
        <graph />
      </div>

      <div v-show="folder === 'list'">
        <list />
      </div>

      <div v-show="folder === 'math'">
        <math />
      </div>

      <div v-show="folder === 'no'">
        <no />
      </div>

      <div v-show="folder === 'search'">
        <search />
      </div>

      <div v-show="folder === 'set'">
        <set />
      </div>

      <div v-show="folder === 'sort'">
        <sort />
      </div>

      <div v-show="folder === 'string'">
        <string />
      </div>

      <div v-show="folder === 'tree'">
        <tree />
      </div>

    </div>
  </div>
</template>

<script>
	import encrypt from './algorithms/encrypt/encrypt.vue'
	import graph from './algorithms/graph/graph.vue'
	import list from './algorithms/list/list.vue'
	import math from './algorithms/math/math.vue'
	import no from './algorithms/no/no.vue'
	import search from './algorithms/search/search.vue'
	import set from './algorithms/set/set.vue'
	import sort from './algorithms/sort/sort.vue'
	import string from './algorithms/string/string.vue'
	import tree from './algorithms/tree/tree.vue'

  export default {
    components: {
      encrypt
    },
    data () {
      return {
        folder: ''
      }
    },
    methods: {
      getFolder () {
        this.folder = this.$route.name
      }
    },
    mounted () {
      this.getFolder()
    }
  }

</script>