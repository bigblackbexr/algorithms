<template>
	
	<nav class="absolute inset-x-0 top-0 z-10">
		<Nav />
	</nav>

	<main class="absolute inset-x-4 top-28 bottom-24 overflow-auto">
		<Main />
	</main>

	<footer class="absolute inset-x-0 bottom-0 ">
		<Foot />
	</footer>

</template>

<script setup>
	import Nav from '../components/nav.vue'
	import Main from '../components/main.vue'
	import Foot from '../components/footer.vue'
</script>