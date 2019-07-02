<template>
  <section>
    <div class="container mx-auto pt-56 relative z-20">
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
          <label class="relative">
            Your Role:
            <select
              name="role[]"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
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
        <p>
          <button
            type="submit"
            class="shadow bg-bborange hover:bg-bborange-darker focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >Send</button>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
	@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
