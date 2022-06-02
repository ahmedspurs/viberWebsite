<template>
   <div class="content w-full p-4">
        <div
        @click="showModal(1)"
          class="flex justify-between items center p-4 bg-gray-100 rounded-xl"
        >
          <span> تعديل الملف الشخصي </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div v-show="showModal1">
            <form class="w-full p-4">
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="name"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الاسم</label>
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="email"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الايميل</label>
              </div>

              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="phone"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="phone"
                >
                <label
                  for="phone"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رقم الهاتف</label>
              </div>

              <div class="checkout">
                <button class="bg-blue-600 px-4 py-2 text-white rounded" expand="block" @click="send()"> تعديل الملف الشخصي </button>
              </div>
            </form>
        </div>
          
        <div
          class="
            flex
            justify-between
            items
            center
            p-4
            bg-gray-100
            rounded-xl
            mt-2
          "
          @click="showModal(2)"
        >
          <span> تعديل تفاصيل المغلق </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
    <div v-show="showModal2">
            <form class="w-full p-4">
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="name"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الاسم</label>
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="email"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الايميل</label>
              </div>

              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="phone"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="phone"
                >
                <label
                  for="phone"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رقم الهاتف</label>
              </div>

             

              <div class="checkout">
                <button class="bg-blue-600 px-4 py-2 text-white rounded" expand="block" @click="send()"> تعديل الملف الشخصي </button>
              </div>
            </form>
        </div>
      </div>
</template>

<script>
export default {
name:"ProfileContent",
    data: () => ({
    showModal1: false,
    showModal2: false

  }),
  methods:{
    showModal(x){
         if(x == 1){
         this.showModal1 = !this.showModal1
          this.showModal2 = false
         }
         else if(x == 2){
         this.showModal2 = !this.showModal2
          this.showModal1 = false

         }
    }
  }
}
</script>

<style>

</style>