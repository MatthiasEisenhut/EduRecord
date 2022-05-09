<template>
  <div
    class="py-10 px-24 bg-white rounded-3xl w-4/12 flex flex-col max-h-fit mt-6 mb-5 justify-center"
  >
    <img src="../assets/logo.jpeg" alt="" height="300" width="300" />
    <div class="mt-6 mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Email address</label
      >
      <input
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@htlwienwest.at"
        required
      />
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Password</label
      >
      <input
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
      />
    </div>

    <router-link
      to="/home"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </router-link>
    <label for="" class="mt-3 text-sm font-medium text-gray-900 dark:text-gray-400">
      Don't have an account? Request one
      <a href="#" class="text-blue-600 hover:underline">here</a></label
    >
  </div>
</template>

<script setup>
import 'flowbite';
</script>
