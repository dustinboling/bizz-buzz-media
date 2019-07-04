<template>
  <section class="home-section lg:py-20">
    <div class="container mx-auto">
      <h2 class="w-5/6 text-3xl lg:text-5xl font-semibold capitalize leading-tight mb-2">{{ title }}</h2>
      <p class="w-1/2 mb-4">{{ description }}</p>
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

