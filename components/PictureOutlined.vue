<template>
  <div class="inline-block" :style="'transform: rotate(' + rotation + ');'">
    <picture>
      <img
        class="border-4 border-bborange shadow-md rounded"
        :src="image"
        :alt="alt"
        :srcset="imageAt2x + ' ' + '2x'"
      />
    </picture>
    <p class="font-hand text-right text-gray-600 tracking-wide">{{ caption }}</p>
  </div>
</template>
<script>
export default {
  props: ["alt", "image", "imageAt2x", "rotation", "caption"]
};
</script>

<style scoped>
</style>
