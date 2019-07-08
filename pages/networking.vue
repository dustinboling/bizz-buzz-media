<template>
  <main>
    <div class="container mx-auto py-56 xl:px-0">
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
          <h1 class="text-5xl tracking-wide">Networking</h1>
          <p>Tap into the power of networking, referrals and collaboration through our monthly Preferred Vendor networking events. Each event features a brief presentation packed with tips to help you grow your business and enhance your brand. New members are announced and then the networking begins. You’ll have the ability to set up a booth to promote your business and connect with other local business owners on a deep level that grows month after month. And because each business is exclusive to it’s category, you can freely exchange ideas and tips. This is just one advantage of joining the club, where we focus on helping you become as successful as you want to be.</p>
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
