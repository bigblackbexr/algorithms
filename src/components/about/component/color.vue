<template>
	<tr v-for="item in colorss" class="bg-background-light">
		<td class="px-12 py-2 rounded-l-full">
			<div class="mt-1">
				{{ getName(item) }}
			</div>
		</td>
		<td class="px-12 py-2">
			<div class="flex items-center rounded-full px-3 py-1.5" :class="{ [`bg-${light}`]: true }">
				<div class="mt-1 ml-2" :class="txColorDark">
					{{ getLight(item) }}
				</div>
				<div class="ml-2 rounded-full hover:ring-2 px-3 py-1" :class="rgColotDark">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="fill" class="w-6 h-6">
						<path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
		</td>
		<td class="px-12 py-2">
			<div class="flex items-center rounded-full px-3 py-1.5" :class="bgColor">
				<div class="mt-1 ml-2">
					{{ getDefault(item) }}
				</div>
				<div class="ml-2 rounded-full hover:ring-2 hover:ring-foreground px-3 py-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="fill" class="w-6 h-6">
						<path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
		</td>
		<td class="px-12 py-2 rounded-r-full">
			<div class="flex items-center rounded-full px-3 py-1.5" :class="bgColorDark">
				<div class="mt-1 ml-2" :class="txColorLight">
					{{ getDark(item) }}
				</div>
				<div class="ml-2 rounded-full hover:ring-2 px-3 py-1" :class="rgColotLight">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="fill" class="w-6 h-6">
						<path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
		</td>
	</tr>
</template>

<script>
  import resolveConfig from 'tailwindcss/resolveConfig'
  import tailwindConfig from 'tailwind-config'
  const fullConfig = resolveConfig(tailwindConfig)

	export default {
		props: [
      'color',
      'colorName',
			'fill'
		],
		data () {
			return {
				// Color name
				nameColor: `${this.colorName.charAt(0).toUpperCase() + this.colorName.slice(1)}`,

				// Color light
				bgColorLight: `bg-${this.colorName}-light`,
				txColorDark: `text-${this.colorName}-dark`,
				rgColotDark: `hover:ring-${this.colorName}-dark`,

				// Color default
				bgColor: `bg-${this.colorName}`,

				//Color dark
				bgColorDark: `bg-${this.colorName}-dark`,
				txColorLight: `text-${this.colorName}-light`,
				rgColotLight: `hover:ring-${this.colorName}-light`,

        x : this.color,

        colors: {},
        colorss: [],

        light: '[#C4F3FE]'
			}
		},
    methods: {
      getColorsConfig () {
        this.colorss = Object.entries(fullConfig.theme.colors).map( element => (
            { [element[0]]: element[1] }
          )
        )

		    let keys = Object.keys(fullConfig.theme.colors)

        // Don't need transparent & currentColor
        for (let index = 0; index < 2; index++) {
          this.colorss.shift()
		      keys.shift()
        }

        for (let index = 0; index < keys.length; index++) {
			    this.colors[keys[index]] = Object.values(this.colorss[index])
        }
      },
      getName (item) {
        let name = Object.keys(item).toString()
        name = name.charAt(0).toUpperCase() + name.slice(1)
        name = name.replace(/([a-z])([A-Z])/g, '$1 $2').trim()
        return name
      },
      getLight (item) {
        let keyName = Object.keys(item).toString()
        let hexLight = item[keyName]
        hexLight = hexLight.light
        return hexLight
      },
      getDefault (item) {
        let keyName = Object.keys(item).toString()
        let hexDefault = item[keyName]
        hexDefault = hexDefault.DEFAULT
        return hexDefault
      },
      getDark (item) {
        let keyName = Object.keys(item).toString()
        let hexDark = item[keyName]
        hexDark = hexDark.dark
        return hexDark
      }
    },
    mounted () {
      this.getColorsConfig()
      console.log(this.color);
    }
	}
</script>