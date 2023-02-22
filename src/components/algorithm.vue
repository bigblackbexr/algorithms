<template>
  <div>
    <div class="absolute inset-x-4 top-28 bottom-24 overflow-auto">
  
      <div v-show="folder === 'encrypt'">
        <encrypt />
      </div>

    </div>
  </div>
</template>

<script>
	import encrypt from './algorithms/encrypt/encrypt.vue'

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