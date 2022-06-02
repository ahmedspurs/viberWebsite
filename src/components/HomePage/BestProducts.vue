<template>
  <div class="p-4">
    <swiper :breakpoints="swiperOptions.breakpoints">
      <swiper-slide :key="item" v-for="item in 6">
        <div
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
              class="p-8 rounded-t-lg"
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
         slidesPerView: 1.5,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 2.5,       
         spaceBetween: 50     
      },   
  
      771: {       
         slidesPerView: 4.5,       
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