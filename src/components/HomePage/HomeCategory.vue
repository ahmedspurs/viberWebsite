<template>
  <div class="p-4">
    <swiper     :breakpoints="swiperOptions.breakpoints">
      <swiper-slide :key="item" v-for="item in 10">
        <div class="flex flex-col justify-center items-center">
          <img src="../../assets/icon/chocolate-svgrepo-com.svg" alt="">
          <span class="py-2">
            هدايا
          </span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
        swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 3.5,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 6,       
         spaceBetween: 50     
      },   
  
      771: {       
         slidesPerView: 6,       
         spaceBetween: 30     
      } 
   }   
        }
      
    }
  }
};
</script>

<style>
</style>