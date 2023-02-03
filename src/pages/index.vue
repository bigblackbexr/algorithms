<template>
	
	<nav class="absolute inset-x-0 top-0">
		<Nav />
	</nav>

	<main class="absolute inset-x-4 top-28 bottom-24 bg-vampire">
		<div class="grid place-items-center h-full">
			<div class="flex animate-pulse">
				<p>.</p>
				<p>.</p>
				<p>.</p>
			</div>
		</div>
	</main>

	<footer class="absolute inset-x-0 bottom-0 ">
		<Foot />
	</footer>

</template>

<script setup>
	import Nav from '../components/nav.vue'
	import Foot from '../components/footer.vue'
</script>