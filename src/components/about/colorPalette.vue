<template>
  <div class="container mx-auto py-5">
    <div class="flex justify-center bg-background">
      <table class="border-separate">
        <caption class="my-5">Dracula's Colors</caption>
        <thead class="bg-background-light text-gray-500">
          <tr>
            <th class="p-3">Name</th>
            <th class="p-3">Light</th>
            <th class="p-3">Default</th>
            <th class="p-3">Dark</th>
            <th class="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-background-light">
            <td class="p-3">
              <div class="flex align-items-center">
                <img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image">
                <div class="ml-3">
                  <div class="">Appple</div>
                  <div class="text-gray-500">mail@rgmail.com</div>
                </div>
              </div>
            </td>
            <td class="p-3">
              Technology
            </td>
            <td class="p-3 font-bold">
              200.00$
            </td>
            <td class="p-3">
              <span class="bg-background text-gray-50 rounded-md px-2">available</span>
            </td>
            <td class="p-3 ">
              <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                <i class="material-icons-outlined text-base">visibility</i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
                <i class="material-icons-outlined text-base">edit</i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
                <i class="material-icons-round text-base">delete_outline</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
	</div>

    <h1> Paleta de colores </h1>

    <div>
      <h2> Color primario </h2>
      <div class="bg-primary-light">
        Color claro
      </div>
      <div class="bg-primary">
        Color default
      </div>
      <div class="bg-primary-dark">
        color oscuro
      </div>
    </div>

    <div>
      <h2> Color background </h2>
      <div class="bg-background-light">
        Color claro
      </div>
      <div class="bg-background">
        Color default
      </div>
      <div class="bg-background-dark">
        color oscuro
      </div>
    </div>
  </div>
</template>