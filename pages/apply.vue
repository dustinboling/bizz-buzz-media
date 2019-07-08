<template>
  <main>
    <div class="container mx-auto min-h-screen mb-20 xl:px-0">
      <div class="content pt-56">
        <div class="flex flex-col lg:flex-row">
          <div class="flex-1 mb-4 lg:mb-0">
            <h1 class="text-5xl tracking-wide leading-tight mb-4">Join the Club</h1>
            <p
              class="mb-4"
            >Our highly exclusive Preferred Vendor Network allows just one vendor per category. Because we have new members signing up daily, we encourage you to contact us as soon as possible to find out if your category is available. If it’s already full, we would be happy to add you to our waiting list.</p>
            <p
              class="mb-4"
            >Please give us a call or fill out the contact request form below and we’ll be happy to answer any questions you have and provide information in detail about what our membership includes.</p>
            <p
              class="mb-4"
            >Thanks so much for your interest in our membership and we look forward to hearing from you!</p>
          </div>
          <div class="flex-1 lg:pl-10">
            <h2 class="text-3xl tracking-wide mb-6">Apply for Membership Today!</h2>
            <form
              class="rounded shadow px-6 py-4 border"
              name="apply"
              method="POST"
              action="/contact/success"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <p class="mb-3">
                <label>
                  Your Name:
                  <input
                    type="text"
                    name="name"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                  />
                </label>
              </p>
              <p class="mb-3">
                <label>
                  Business Name:
                  <input
                    type="text"
                    name="business_name"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                  />
                </label>
              </p>
              <p class="mb-3">
                <label>
                  Your Phone Number:
                  <input
                    type="text"
                    name="phone"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                  />
                </label>
              </p>
              <p class="mb-2">
                <label>
                  Your Email:
                  <input
                    type="email"
                    name="email"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bborange"
                  />
                </label>
              </p>
              <div data-netlify-recaptcha="true"></div>
              <p class="text-right">
                <button
                  type="submit"
                  class="shadow bg-bborange hover:bg-bborange-darker focus:shadow-outline focus:outline-none text-sm uppercase tracking-wide py-2 px-4 rounded mt-2"
                >Send</button>
              </p>
            </form>
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
