<template>
  <div class="p-4">
      <h2 class="text-center">
          تواصل معنا
      </h2>
    <div class="w-full md:w-96 md:max-w-full mx-auto">
      <div class="p-6 ">
        <form method="POST" action="https://herotofu.com/start">
          <label class="block mb-6">
            <span class="text-gray-700">الاسم </span>
            <input
              type="text"
              name="name"
              class="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              placeholder="الاسم "
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700"> الايميل</span>
            <input
              name="email"
              type="email"
              class="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              placeholder="joe.bloggs@example.com"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">رسالتك</span>
            <textarea
              name="message"
              class="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              rows="3"
              placeholder="رسالتط"
            ></textarea>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              class="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
            >
              تواصل معنا 
            </button>
          </div>
    
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>