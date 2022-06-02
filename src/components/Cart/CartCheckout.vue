<template>
  <div class="border border-gray-400 rounded w-full">
    <div class="tabel p-4">
      <div class="flex justify-between">
        <h2 class="font-semibold">ملخص الطلبيه</h2>
        <h2>4 منتجات</h2>
      </div>
      <div class="flex justify-between">
        <h2 class="font-semibold"> السعر</h2>
        <h2>400$ </h2>
      </div>

    </div>
    <div class="buttons p-4 text-center">
        <router-link to="/CheckoutPage">

        <buton class="bg-violet-600 rounede p-2 w-full block text-white">اتمام الطلب</buton>
        </router-link>
        <router-link to="/ProductsPage">
        <buton class="border border-violet-500 rounded p-2 w-full block mt-2"> الاستمرار بالتسوق</buton>

        </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>