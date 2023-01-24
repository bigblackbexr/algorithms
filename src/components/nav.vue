<template>
	<div class="
		bg-vampire
		rounded
		m-4
		">
		<div class="flex flex-row items-center justify-between m-2 p-2">
			<a class="ml-9" href="/">
				Algorithms
			</a>
			<button @click="open = !open">
				<div class="flex flex-row items-center justify-between">
					<svg :class="{'hidden': open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
					<svg :class="{'hidden': !open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</button>
		</div>
		<div :class="{'flex': open, 'hidden': !open}">
			Hola
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			open: false
		}
	},
	methods:{
		a () {
			console.log('hola');
		}
	}
}
</script>