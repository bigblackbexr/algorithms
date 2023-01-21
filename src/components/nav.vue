<template>
	<div class="bg-cyan rounded m-4 flex items-center text-sm">
		<div>
			<span> Algorithms </span>
		</div>
		<div class="block" @click="a()">
			<button>
				B
			</button>
		</div>
		<div>
			<a href="/">
				a
			</a>
			<a href="/">
				b
			</a>
			<a href="/">
				c
			</a>
		</div>
		<div>
			<a href="/">Download</a>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		a () {
			console.log('hola');
		}
	}
}
</script>