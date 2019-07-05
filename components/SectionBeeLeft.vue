<template>
  <section class="home-section lg:py-20">
    <div class="container mx-auto px-6 md:px-0">
      <div class="lg:pl-64">
        <h2
          class="text-center lg:text-right text-3xl lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >{{ title }}</h2>
        <p class="text-center lg:text-right lg:pl-64 mb-4">{{ description }}</p>
      </div>
      <!-- Left -->
      <div class="flex">
        <div class="hidden xl:block flex-1 relative">
          <div class="absolute inset-0">
            <img
              class="relative z-10 h-full"
              style="max-width: none; !important;"
              src="/bizzbuzz-bee-right.svg"
              alt="Bizz-Buzz Media"
            />
          </div>
        </div>
        <!-- Right -->
        <div class="xl:max-w-2xl w-full flex-shrink-0">
          <div class="inline-block" style="transform: rotate(1deg);">
            <picture>
              <img
                class="border-4 border-bborange shadow-md rounded"
                :src="image"
                :alt="title"
                :srcset="imageAt2x + ' ' + '2x'"
              />
            </picture>
            <p class="font-hand text-right text-gray-600 tracking-wide">{{ imageCaption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["title", "description", "image", "imageAt2x", "imageCaption"]
};
</script>

<style scoped>
.home-section {
  @apply py-10;
}
</style>
