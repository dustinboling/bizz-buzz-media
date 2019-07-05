<template>
  <main>
    <div class="container mx-auto py-56">
      <div class="flex">
        <div class="flex-1">
          <picture-outlined
            image="/img/730w/04-bizz-buzz.jpg"
            imageAt2x="/img/730w/04-bizz-buzz@2x.jpg"
            rotation="-1deg"
            alt="The alt text"
          />
        </div>
        <div class="flex-1 pl-10">
          <h1 class="text-5xl tracking-wide leading-none mb-4">Around the Hive</h1>
          <p class="mb-4">Here’s the latest buzz on what we have going on at Bizz-Buzz Media!</p>
          <p
            class="mb-4"
          >Our worker bees are busy making sure our members are taken care of at a high level and we’re excited to share what we’ve been up to.</p>
          <ul class="list-disc list-inside">
            <li>Scheduled Events</li>
            <li>New Members</li>
            <li>Community Outreach</li>
            <li>News</li>
            <li>Things to Do</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PictureOutlined from "~/components/PictureOutlined.vue";

export default {
  components: {
    PictureOutlined
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
	@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
