<template>
  <div>
    <header class="shadow-md border-t-2 border-black fixed top-0 left-0 right-0 z-50">
      <div class="top-nav bg-gray-500 text-white">
        <div
          class="container mx-auto px-6 md:px-0 flex justify-between items-center py-3 text-sm font-light tracking-wide"
        >
          <span>Creating buzz for your bizzness™</span>

          <div class="inline-flex">
            <a class="mr-3" href="https://www.twitter.com/bizzbuzzmedia" target>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter-square"
                class="h-5 svg-inline--fa fa-twitter-square fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                />
              </svg>
            </a>

            <a href="https://www.facebook.com/bizzbuzzmedia" target="_blank">
              <svg
                class="h-5 svg-inline--fa fa-facebook-square fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="branding bg-bborange">
        <div class="container mx-auto flex justify-center md:justify-between items-center h-24">
          <nav class="main-nav-left hidden md:block">
            <ul class="flex items-center uppercase text-lg tracking-wide">
              <li class="mr-16">
                <nuxt-link to="/membership">Membership Info</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/apply">Join the Club</nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="logo -mt-5 lg:-mt-12 flex flex-col items-center text-center">
            <nuxt-link to="/">
              <img src="/bizzbuzz-bee.svg" class="h-20 md:h-24 mb-2" alt="Bizz-Buzz Media" />
            </nuxt-link>
            <span class="uppercase text-xs tracking-wide">Bizz-Buzz Media</span>
          </div>
          <nav class="main-nav-right hidden md:block">
            <ul class="flex items-center uppercase text-lg tracking-wide">
              <li>
                <nuxt-link to="/beehive">Around the Hive</nuxt-link>
              </li>
              <li class="ml-16">
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <nuxt />
    <footer class="py-10 bg-bborange">
      <p
        class="text-center uppercase text-xs tracking-wide font-light"
      >&copy;2019 Bizz-Buzz Media LLC. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Lato", sans-serif;
}
p,
ul {
  @apply font-light;
}
</style>
