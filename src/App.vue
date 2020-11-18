<template>
  <nav id="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <router-link
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              to="/"
              >Draw</router-link
            >
            <a
              href="#"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >Dashboard</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
