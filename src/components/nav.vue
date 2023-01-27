<template>
	<div class="bg-vampire rounded-lg m-4 py-2">
		<div class="md:flex md:items-center md:flex-row">
			<!-- Logo & Button -->
			<div class="flex flex-row items-center justify-between m-2 p-2">
				<a class="ml-9 max-md:text-xl" href="#">
					Algorithms
				</a>
				<button class="md:hidden" @click="open = !open">
					<svg :class="{'hidden': open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
					<svg :class="{'hidden': !open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</button>
			</div>

			<!-- Menu -->
			<div :class="{'flex': open, 'hidden': !open}"
			class="flex flex-col grow pb-2 md:flex md:flex-row md:justify-end md:pb-0 text-base max-md:text-sm md:pr-16">

				<!--
					First row is md light 
					Second row is md dark
					Third row is for sm light & dark
				-->

				<a class="
					rounded-l-lg bg-green-light text-green-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
						Menu
				</a>
				<a class="
					bg-green-light text-green-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
						About
				</a>
				<a class="
					bg-green-light text-green-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
						Contact
				</a>
				<a class="
					rounded-r-lg bg-green-light text-green-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
						More
				</a>
			</div>
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