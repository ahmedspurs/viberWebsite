<template>
  <div class="grid md:grid-cols-2 grid-cols-1 p-4">
    <!-- firt col -->
    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-green-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">طلب جديد</div>
        <div class="text-center text-3xl">25</div>
      </div>
    </div>
    <!-- second col -->
    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-red-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">الرصيد</div>
        <div class="text-center text-3xl">1200</div>
      </div>
    </div>
    <!-- third col -->
    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-violet-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">منتح</div>
        <div class="text-center text-3xl">1052</div>
      </div>
    </div>

    <!-- forth col -->

    <div class="flex-1 m-5 relative rounded bg-gray-200 shadow">
      <div
        class="bg-amber-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow"
      >
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </div>

      <div class="float-left top-0 right-0 m-3">
        <div class="text-center text-sm">قسم</div>
        <div class="text-center text-3xl">18</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeServices"
};
</script>

<style>
</style>