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
			class="flex flex-col grow pb-4 md:flex md:flex-row md:justify-end md:pb-0 text-base max-md:text-sm">
				<a class="focus:bg-vampire-light focus:rounded-lg hover:underline decoration-2 underline-offset-8 focus:underline md:p-4" href="#">Portafolio</a>
				
				<a class="md:p-4" href="#">Try</a>

				<a class="rounded-l-lg bg-foreground text-orange focus:underline decoration-2 underline-offset-8 md:p-4" href="#">About</a>
				<a class="rounded-r-lg bg-foreground text-orange focus:underline decoration-2 underline-offset-8 md:p-4" href="#">Contact</a>
				<a class="md:p-4 md:pr-10" href="#">More</a>
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