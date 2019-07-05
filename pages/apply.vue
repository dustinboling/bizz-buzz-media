<template>
  <main>
    <div class="container mx-auto h-screen">
      <div class="content pt-56">
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
            <h1 class="text-5xl tracking-wide leading-tight">Join the Club</h1>
            <h2 class="text-3xl tracking-wide mb-6">Apply for Membership Today!</h2>
            <p>Our highly exclusive Preferred Vendor Network allows just one vendor per category. Because we have new members signing up daily, we encourage you to contact us as soon as possible to find out if your category is available. If it’s already full, we would be happy to add you to our waiting list.</p>
            <div
              class="mb-4"
            >Please give us a call or fill out the contact request form below and we’ll be happy to answer any questions you have and provide information in detail about what our membership includes.</div>
            <div
              class="mb-4"
            >Thanks so much for your interest in our membership and we look forward to hearing from you!</div>
          </div>
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
