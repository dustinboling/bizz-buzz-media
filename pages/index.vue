<template>
  <main>
    <!-- SECTION 1 -->
    <section
      class="relative pt-56 pb-20"
      style="background-image:url('/bizzbuzz-bee.svg');background-position:120% -60%;background-repeat:no-repeat;background-size:50% 80%;"
    >
      <div class="container mx-auto relative z-20">
        <div class="inro-text tracking-wide">
          <h1 class="w-1/2 lg:text-5xl font-light capitalize leading-tight mb-6">
            Hello, Lane County!
            <br />
            <span class="font-semibold leading-none">
              We're creating buzz
              <br />for our local bizznesses
            </span>
          </h1>
          <p
            class="w-1/2"
          >Bizz-Buzz Media is an exclusive membership-based limited access group of businesses that are owned and operated locally within the greater Lane County area.</p>
        </div>
        <div class="intro-buttons py-10 tracking-wide">
          <nuxt-link
            to="/apply"
            class="text-xl font-semibold inline-block rounded-full bg-bborange border border-bborange-darker px-12 py-3 shadow-md mr-8"
            style="border-color: #FF8D00"
          >Apply Now!</nuxt-link>
          <nuxt-link
            to="/membership"
            class="text-xl font-light inline-block rounded-full bg-gray-400 border border-gray-500 px-8 py-3 shadow"
          >Membership Information</nuxt-link>
        </div>
        <div class="inline-block" style="transform: rotate(-1deg);">
          <img
            class="border-4 border-bborange shadow-md rounded"
            src="http://lorempixel.com/730/410/nature"
            alt
          />
          <p
            class="font-hand text-right text-gray-600 tracking-wide"
          >Making business happen throughout Lane County, Oregon</p>
        </div>
      </div>
    </section>

    <!-- SECTION 2 right-aligned -->
    <section
      class="py-20 relative"
      style="background-image:url('/bizzbuzz-bee-right.svg');background-position:-30%;background-repeat:no-repeat;background-size:50% 80%;"
    >
      <div class="container mx-auto flex flex-col items-end">
        <h2
          class="w-5/6 text-right lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >Our Network of Local Businesses Have Access to Exclusive Marketing Opportunities</h2>
        <p
          class="w-1/2 text-right mb-4"
        >Our Preferred Vendors Network is highly exclusive, allowing only a limited number of businesses from each category into the network.</p>
        <div class="inline-block" style="transform: rotate(1deg);">
          <img
            class="border-4 border-bborange shadow-md rounded"
            src="http://lorempixel.com/730/410/people"
            alt
          />
          <p
            class="font-hand text-right text-gray-600 tracking-wide"
          >Only a single vendor allowed per category</p>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section
      class="py-20"
      style="background-image:url('/bizzbuzz-bee.svg');background-position:125% 0%;background-repeat:no-repeat;background-size:50% 80%;"
    >
      <div class="container mx-auto">
        <h2
          class="w-5/6 lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >Connect with Other Local Businesses through Exclusive Local Business Networking Events</h2>
        <p
          class="w-1/2 mb-4"
        >Get bizzy creating long-lasting referral relationships with other local business owners through our exclusive Preferred Vendor networking events held each and every month.</p>
        <div class="inline-block" style="transform: rotate(-1deg);">
          <img
            class="border-4 border-bborange shadow-md rounded"
            src="http://lorempixel.com/730/410/business"
            alt
          />
          <p
            class="font-hand text-right text-gray-600 tracking-wide"
          >Only a single vendor allowed per category</p>
        </div>
      </div>
    </section>

    <!-- SECTION 4 right-aligned -->
    <section
      class="py-20"
      style="background-image:url('/bizzbuzz-bee-right.svg');background-position:-30%;background-repeat:no-repeat;background-size:50% 80%;"
    >
      <div class="container mx-auto flex flex-col items-end">
        <h2
          class="w-5/6 text-right lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >Our Network of Local Businesses Have Access to Exclusive Marketing Opportunities</h2>
        <p
          class="w-1/2 text-right mb-4"
        >Our Preferred Vendors Network is highly exclusive, allowing only a limited number of businesses from each category into the network.</p>
        <div class="inline-block" style="transform: rotate(1deg);">
          <img
            class="border-4 border-bborange shadow-md rounded"
            src="http://lorempixel.com/730/410/nature"
            alt
          />
          <p
            class="font-hand text-right text-gray-600 tracking-wide"
          >Only a single vendor allowed per category</p>
        </div>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section
      class="py-20"
      style="background-image:url('/bizzbuzz-bee.svg');background-position:125% 0%;background-repeat:no-repeat;background-size:50% 80%;"
    >
      <div class="container mx-auto">
        <h2
          class="w-5/6 lg:text-5xl font-semibold capitalize leading-tight mb-2"
        >Connect with Other Local Businesses through Exclusive Local Business Networking Events</h2>
        <p
          class="w-1/2 mb-4"
        >Get bizzy creating long-lasting referral relationships with other local business owners through our exclusive Preferred Vendor networking events held each and every month.</p>
        <div class="inline-block" style="transform: rotate(-1deg);">
          <img
            class="border-4 border-bborange shadow-md rounded"
            src="http://lorempixel.com/730/410/nature/?v=5"
            alt
          />
          <p
            class="font-hand text-right text-gray-600 tracking-wide"
          >Only a single vendor allowed per category</p>
        </div>
      </div>
    </section>
  </main>
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
