<template>
<div class="md:flex justify-between">
    <form class="w-full p-4">
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">الاسم كامل </label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
  </div>

 <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">رقم الهاتف  </label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
  </div>

 <div class="mb-6">

  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">المدينه</label>
<select id="countries" class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>الخرطوم </option>
  <option>بحري</option>
  <option>امدرمان</option>
</select>

 </div>

 <div class="mb-6">
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">المنطقه</label>
<select id="countries" class="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>جبرة</option>
  <option>الطائف</option>
  <option>المعمورة</option>
</select>
 </div>

 <div class="mb-6">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">الوصف كاملا </label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
 </div>




  <button type="submit" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">اتمام الطلب</button>
</form>
<div class="payments w-full">
<h2 class="text-center">
ملخص الطلبيه
</h2>
<payments-card />
<br>
<br>

<h2 class="text-center">
  طريقه الدفع
</h2>
<payment-methos />
<br><br>
</div>
</div>

</template>

<script>
import PaymentMethos from './PaymentMethos.vue'
import PaymentsCard from './PaymentsCard.vue'
export default {
  components: { PaymentsCard, PaymentMethos },

}
</script>

<style>

</style>