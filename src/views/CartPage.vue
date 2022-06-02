<template>
  <div class="p-4">
      <h2 class="text-center">سله التسوق</h2>
      <div class="md:flex block justify-between items-center">
      <cart-items />
        <cart-checkout />
      </div>
  </div>
</template>

<script>
import CartItems from '@/components/Cart/CartItems.vue'
import CartCheckout from '@/components/Cart/CartCheckout.vue'
export default {
  components: { CartItems, CartCheckout },

}
</script>

<style>

</style>