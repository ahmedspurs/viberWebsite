<template>
  <div class="p-4">
      <single-product />

      <h2 class="text-center text-4xl font-bold">
          افضل المنتجات
      </h2>
          <best-products />

  </div>
</template>

<script>
import SingleProduct from '@/components/ProductPage/SingleProduct.vue'
import BestProducts from '@/components/HomePage/BestProducts.vue'
export default {
  components: { SingleProduct,BestProducts },

}
</script>


    <style>

</style>