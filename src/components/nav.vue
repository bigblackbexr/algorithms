<template>
	<div class="inset-x-0 top-0 bg-vampire rounded-lg m-4 py-2">
		<div class="md:flex md:items-center md:flex-row">
			<!-- Logo & Button -->
			<div class="flex flex-row items-center justify-between m-2 p-2">
				<a class="ml-9 max-md:text-xl" href="#">
					{{ nav.title }}
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
			class="flex flex-col grow pb-2 md:flex md:flex-row md:justify-end md:pb-0 text-base max-md:text-sm md:pr-4">

				<!--
					First row is md light
					Second row is md dark
					Third row is for sm light & dark
				-->

				<a class="
					rounded-l-lg bg-orange-light text-orange-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
          {{ nav.menu }}
				</a>
				<a class="
					bg-orange-light text-orange-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
          {{ nav.about }}
				</a>
				<a class="
					bg-orange-light text-orange-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
          {{ nav.contact }}
				</a>
				<a class="
					rounded-r-lg bg-orange-light text-orange-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					"
					href="#">
          {{ nav.more }}
				</a>

        <!-- Remove hidden -->
				<a class="
          hidden relative
					rounded-r-lg bg-orange-light text-orange-dark hover:underline focus:underline decoration-2 underline-offset-8 md:py-4 md:px-9
					dark:bg-purple-light dark:text-purple-dark
					max-md:my-2 max-md:mx-4 max-md:p-3 max-md:rounded-lg
					">

					<a @click="openSubMore = !openSubMore" class="flex flex-row hover:cursor-pointer justify-between">
						<span>
              {{ nav.more }}
            </span>
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
                    <p class="font-semibold">
                      {{ nav.options.one.title }}
                    </p>
                    <p class="text-sm">
                      {{ nav.options.one.description }}
                    </p>
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
  computed: {
    nav () {
      return this.$tm('components.nav', 'en')
    }
  }
}
</script>
