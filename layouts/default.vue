<template>
  <div>
    <header class="shadow-md border-t-2 border-black fixed top-0 left-0 right-0 z-50">
      <div class="top-nav bg-gray-500 text-white">
        <div
          class="container mx-auto px-6 md:px-0 flex justify-between items-center py-3 text-sm font-light tracking-wide"
        >
          <span>Creating buzz for your bizzness™</span>
          <span>Sign in</span>
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
