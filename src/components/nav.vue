<template>
	<div class="inset-x-0 top-0 bg-vampire rounded-lg m-4 py-2">
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

				<a class="
					md:hidden relative
					rounded-r-lg bg-green-light text-green-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					">

					<a @click="openSubMore = !openSubMore" class="flex flex-row hover:cursor-pointer justify-between">
						<span>More</span>
						<svg :class="{'hidden': openSubMore}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
						<svg :class="{'hidden': !openSubMore}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</a>
					<div :class="{'hidden': !openSubMore}"
					class="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
            <div class="px-2 pt-2 pb-4 bg-foreground rounded-lg shadow-lg dark-mode:bg-gray-700">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <div class="bg-teal-500 text-white rounded-lg p-3">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  </div>
                  <div class="ml-3">
                    <p class="font-semibold">Appearance</p>
                    <p class="text-sm">Easy customization</p>
                  </div>
                </a>

                <a class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <div class="bg-teal-500 text-white rounded-lg p-3">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  </div>
                  <div class="ml-3">
                    <p class="font-semibold">Comments</p>
                    <p class="text-sm">Check your latest comments</p>
                  </div>
                </a>

                <a class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <div class="bg-teal-500 text-white rounded-lg p-3">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="md:h-6 md:w-6 h-4 w-4"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                  </div>
                  <div class="ml-3">
                    <p class="font-semibold">Analytics</p>
                    <p class="text-sm">Take a look at your statistics</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			open: false,
			openSubMore: false
		}
	},
	methods:{
		a () {
			console.log('hola');
		}
	}
}
</script>