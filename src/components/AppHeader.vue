<template>
  <div class="appHead">
    <nav
      class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-800
      "
    >
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a class="flex items-center">
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >هدايا</span
          >
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="
              flex flex-col
              mt-4
              md:flex-row md:mt-0 md:text-sm md:font-medium
            "
          >
            <router-link to="/">
              <a
                href="#"
                class="
                  block
                  text-white
                  bg-blue-700
                  rounded
                  mx-2
                  md:bg-transparent md:text-blue-700 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >الرئيسيه</a
              >
            </router-link>

            <!-- category page -->
            <router-link to="/CategoryPage">
              <a
                href="#"
                class="
                  block
                  text-white
                  bg-blue-700
                  rounded
                  mx-2
                  md:bg-transparent md:text-blue-700 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >الاقسام</a
              >
            </router-link>

            <!-- store page -->
            <router-link to="/ProductsPage">
              <a
                href="#"
                class="
                  block
                  text-white
                  bg-blue-700
                  rounded
                  mx-2
                  md:bg-transparent md:text-blue-700 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >المتجر</a
              >
            </router-link>

            <!-- contact us page -->
            <router-link to="/ContactPage">
              <a
                href="#"
                class="
                  block
                  text-white
                  bg-blue-700
                  rounded
                  mx-2
                  md:bg-transparent md:text-blue-700 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >تواصل معنا</a
              >
            </router-link>
          </ul>
        </div>
        <div class="md:flex items-center justify-center hidden">
          <router-link to="/ProfilePage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </router-link>
          <router-link to="/CartPage">
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
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
</style>