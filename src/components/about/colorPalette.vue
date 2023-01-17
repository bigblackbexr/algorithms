
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
          <Color fill="LightGrey" />
        </tbody>
      </table>
	  </div>
  </div>
</template>

<script>
  import Color from './component/color.vue'
  
  export default {
    components: {
      Color
    }
  }
</script>