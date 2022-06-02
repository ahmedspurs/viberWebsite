<template>
  <div class="p-4 w-full">
        <div class="cart w-ful">
            <div class="flex justify-between items-center p-4" :key="item" v-for="item in 4">
                <div class="w-full">
                    <img class="w-24 h-24" src="http://www.unitycement.com/site-Ar/wp-content/uploads/2017/11/%D8%A8%D9%88%D8%B1%D8%AA%D9%84%D8%A7%D9%86%D8%AF%D9%8A-%D8%B9%D8%A7%D8%AF%D9%8A1.png" alt="">
                </div>
                <div class="w-full">
                    <h2 class="block">مفك براغي</h2>
                    <span class="text-blue-500 font-semibold block text-xl pb-2">125.99$</span>
                    <div class="flex">
                        <button class="bg-gray-300 text-black  p-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
                        </button>
                        <input class="w-8 text-center" type="text" value="1">
                        <buuton class="bg-gray-300 text-black  p-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
</svg>
                        </buuton>
                    </div>
                </div>
            </div>          
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>