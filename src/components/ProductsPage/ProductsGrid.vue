<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
    <div
     :key="item" v-for="item in 10"
      class="
        max-w-sm
        bg-white
        rounded-lg
        shadow-md
        dark:bg-gray-800 dark:border-gray-700
      "
    >
       <router-link to="/ProductPage">
         <img
              class="p-8"
              src="https://rukminim2.flixcart.com/image/416/416/kgjqefk0/festive-gift-box/k/g/d/square-shaped-mouthwatering-birthday-gift-hamper-of-multiple-original-imafwrdesxpytazu.jpeg?q=70"
              alt="product image"
            />
            </router-link>
      <div class="px-5 pb-5">
        <a href="#">
          <h5
            class="
              text-xl
              font-semibold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            هديه
          </h5>
        </a>
        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >$599</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>