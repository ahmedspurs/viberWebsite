<template>
<div class="md:px-28">
      <app-header></app-header>
    <router-view />
</div>


</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>
