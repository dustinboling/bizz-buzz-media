<template>
  <section>
    <div class="container mx-auto pt-56 relative z-20 mb-56">
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
          <h1 class="mb-4 text-3xl">Contact Us</h1>
          <form
            name="contact"
            method="POST"
            action="/contact/success"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <p>
              <label>
                Your Name:
                <input
                  type="text"
                  name="name"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                />
              </label>
            </p>
            <p>
              <label>
                Your Email:
                <input
                  type="email"
                  name="email"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                />
              </label>
            </p>
            <p>
              <label>
                Message:
                <textarea
                  name="message"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                ></textarea>
              </label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p class="text-right">
              <button
                type="submit"
                class="shadow bg-bborange hover:bg-bborange-darker focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
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
