<template>
  <div class="w-full">
    <div class="md:flex justify-between items-center h-full block p-4 py-16">
      <profile-header />
      <profule-content />
     
    </div>
  </div>
</template>

<script>
import ProfileHeader from '@/components/ProfilePage/ProfileHeader.vue';
import ProfuleContent from '@/components/ProfilePage/ProfuleContent.vue';

export default {
  name: "ProfilePage",
  components:{
    ProfileHeader,
    ProfuleContent
    
  },

};
</script>

<style>

.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>