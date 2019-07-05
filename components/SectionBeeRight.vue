<template>
  <section class="home-section w-full lg:py-20">
    <div class="container mx-auto px-6 md:px-0">
      <div class="lg:pr-64">
        <h2
          class="text-center lg:text-left text-3xl lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >{{ title }}</h2>
        <p class="mb-4 text-center lg:text-left lg:pr-48">{{ description }}</p>
      </div>

      <div class="flex">
        <!-- Left -->
        <div class="xl:max-w-2xl w-full flex-shrink-0 xl:mr-20">
          <div class="inline-block" style="transform: rotate(-1deg);">
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

        <!-- Right -->
        <div class="hidden xl:block flex-1 relative">
          <div class="absolute inset-auto -mt-20 w-full text-right">
            <img
              class="relative z-10"
              style="max-width: none; !important;"
              src="/bizzbuzz-bee.svg"
              alt="Bizz-Buzz Media"
            />
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

