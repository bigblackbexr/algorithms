
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
          <Color :color="background" colorName="background" fill="silver" />
          <Color :color="currentLine" colorName="currentLine" fill="silver" />
          <Color :color="foreground" colorName="foreground" fill="silver" />
          <Color :color="comment" colorName="comment" fill="silver" />
          <Color :color="cyan" colorName="cyan" fill="silver" />
          <Color :color="green" colorName="green" fill="silver" />
          <Color :color="orange" colorName="orange" fill="silver" />
          <Color :color="pink" colorName="pink" fill="silver" />
          <Color :color="purple" colorName="purple" fill="silver" />
          <Color :color="red" colorName="red" fill="silver" />
          <Color :color="vampire" colorName="vampire" fill="silver" />
          <Color :color="yellow" colorName="yellow" fill="silver" />
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