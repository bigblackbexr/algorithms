<script setup>
  import { RouterView  } from 'vue-router';
	import Nav from './components/nav.vue'
	import Foot from './components/footer.vue'
</script>

<template>

  <nav class="absolute inset-x-0 top-0 z-10">
		<Nav />
	</nav>
  
	<footer class="absolute inset-x-0 bottom-0 ">
		<Foot />
	</footer>

  <RouterView />
  <!-- <div class="bg-pink flex justify-center">
    <div class="w-8/12">
      <colorPalette />
    </div>
  </div> -->
</template>