<template>
  <div class="w-full">
    <!-- ctaerory section -->
    <div class="flex justify-between items-center p-4">
      <span class="text-2xl font-semibold"> الاقسام </span>
      <span> عرض الكل </span>
    </div>
    <home-category />

    <!-- best products -->
    <div class="flex justify-between items-center p-4">
      <span class="text-2xl font-semibold"> افضل المنتجات </span>
      <span> عرض الكل </span>
    </div>
    <best-products />

        <!-- leatest products -->
    <div class="flex justify-between items-center p-4">
      <span class="text-2xl font-semibold"> احدث المنتجات </span>
      <span> عرض الكل </span>
    </div>
    <best-products />
  </div>
</template>

<script>
import HomeCategory from "@/components/HomePage/HomeCategory.vue";
import BestProducts from '@/components/HomePage/BestProducts.vue';
// @ is an alias to /src
export default {
  components: { HomeCategory, BestProducts },
  name: "HomeView",
};
</script>
