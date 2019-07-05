<template>
  <main>
    <div class="container mx-auto py-56">
      <div class="flex">
        <div class="flex-1 pr-10">
          <h1 class="text-5xl tracking-wide leading-none mb-4">Membership Information</h1>
          <p
            class="mb-4 font-normal tracking-wide"
          >Do you like the idea of being a member of our highly exclusive Preferred Vendors Network? Would you like to know more?</p>
          <ul class="mb-4">
            <li>Some of the details include:</li>
            <li>
              <ul class="list-disc list-inside">
                <li>We allow only one vendor per category</li>
                <li>We have 2 membership packages to choose from</li>
                <li>We have service standards that members must meet in order to qualify</li>
              </ul>
            </li>
          </ul>
          <p
            class="mb-4"
          >If you would like to know if your category is available and find out more about pricing and what we offer in detail, please fill out the contact form below or give us a call and we’ll be happy to explain everything we have to offer and answer any questions you have.</p>
          <p
            class="mb-10"
          >Thanks so much for taking the time to look us up and we look forward to hearing from you!</p>
          <nuxt-link
            to="/apply"
            class="text-xl font-semibold inline-block rounded-full bg-bborange border border-bborange-darker px-12 py-3 shadow-md mr-8 mb-3 md:mb-0"
            style="border-color: #FF8D00"
          >Apply Now!</nuxt-link>
        </div>
        <div class="flex-1 lg:pl-20">
          <picture-outlined
            image="/img/730w/04-bizz-buzz.jpg"
            imageAt2x="/img/730w/04-bizz-buzz@2x.jpg"
            rotation="1deg"
            alt="The alt text"
          />
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
