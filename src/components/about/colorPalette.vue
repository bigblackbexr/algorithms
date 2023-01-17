
<template>
  <div class="container mx-auto py-12">
    <div class="flex justify-center bg-background">
      <table class="table-auto border-separate border-spacing-y-4">
        <caption class="mb-2">Palette Colors</caption>
        <thead class="bg-background-light">
          <tr>
            <th class="p-3 rounded-l-full">Name</th>
            <th class="p-3">Light</th>
            <th class="p-3">Default</th>
            <th class="p-3 rounded-r-full">Dark</th>
          </tr>
        </thead>
        <tbody>
          <Color :color="light" colorName="background" fill="silver" />
        </tbody>
      </table>
	  </div>
  </div>
</template>

<script>
  import resolveConfig from 'tailwindcss/resolveConfig'
  import tailwindConfig from 'tailwind-config'
  const fullConfig = resolveConfig(tailwindConfig)
  import Color from './component/color.vue'
  
  export default {
    components: {
      Color
    },
    data () {
      return {
        background: {},
        currentLine: {},
        foreground: {},
        comment: {},
        cyan: {},
        green: {},
        orange: {},
        pink: {},
        purple: {},
        red: {},
        vampire: {},
        yellow: {},

        light: null,
        default: null,
        dark: null,
      }
    },
    methods: {
      getColors () {

        let { background,
              currentLine,
              foreground,
              comment,
              cyan,
              green,
              orange,
              pink,
              purple,
              red,
              vampire,
              yellow          
            } = fullConfig.theme.colors

        this.background = this.convertToUppercase(background)
        this.currentLine = this.convertToUppercase(currentLine)
        this.foreground = this.convertToUppercase(foreground)
        this.comment = this.convertToUppercase(comment)
        this.cyan = this.convertToUppercase(cyan)
        this.green = this.convertToUppercase(green)
        this.orange = this.convertToUppercase(orange)
        this.pink = this.convertToUppercase(pink)
        this.purple = this.convertToUppercase(purple)
        this.red = this.convertToUppercase(red)
        this.vampire = this.convertToUppercase(vampire)
        this.yellow = this.convertToUppercase(yellow)

        this.light = '[' + this.red.light + ']'
        console.log(this.light);
      },
      convertToUppercase (object) {
        return Object.fromEntries(
          Object.entries(object).map(([key, value]) => [key, value.toUpperCase()])
        )
      },
    },
    mounted () {
      this.getColors()
    }
  }
</script>