<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
    <div
      class="flex flex-col justify-center items-center"
      :key="item"
      v-for="item in 10"
    >
      <img src="../../assets/icon/chocolate-svgrepo-com.svg" alt="" />
      <span class="py-2"> هدايا </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>