<template>
  <main>
    <!-- SECTION 1 -->
    <!-- style="background-image:url('/bizzbuzz-bee.svg');background-position:130% -60%;background-repeat:no-repeat;background-size:50% 80%;" -->
    <section class="relative pb-10 lg:pb-20">
      <div class="container mx-auto px-6 md:px-0 relative z-20 flex">
        <div
          class="relative z-10 max-w-3xl xl:max-w-2xl mx-auto xl:mx-0 w-full flex-shrink-0 pt-48 md:pt-56"
        >
          <div class="inro-text tracking-wide">
            <h1 class="text-3xl lg:text-5xl font-light capitalize leading-tight">
              Hello, Lane County!
              <br />
              <span class="font-semibold leading-none">
                We're creating buzz
                <br />for our local bizznesses
              </span>
            </h1>
            <p
              class="pt-4 lg:pt-6"
            >Bizz-Buzz Media is an exclusive membership-based limited access group of businesses that are owned and operated locally within the greater Lane County area.</p>
          </div>
          <div class="intro-buttons pt-8 lg:pt-10 pb-12 tracking-wide">
            <nuxt-link
              to="/apply"
              class="text-xl font-semibold inline-block rounded-full bg-bborange border border-bborange-darker px-12 py-3 shadow-md mr-8 mb-3 md:mb-0"
              style="border-color: #FF8D00"
            >Apply Now!</nuxt-link>
            <nuxt-link
              to="/membership"
              class="text-xl font-light inline-block rounded-full bg-gray-400 border border-gray-500 px-8 py-3 shadow"
            >Membership Information</nuxt-link>
          </div>
          <div class="inline-block" style="transform: rotate(-1deg);">
            <picture>
              <img
                class="border-4 border-bborange shadow-md rounded"
                src="/img/730w/eugene-oregon-skyline.jpg"
                alt="Eugene Oregon Business Networking"
                srcset="/img/730w/eugene-oregon-skyline@2x.jpg 2x"
              />
            </picture>
            <p
              class="font-hand text-right text-gray-600 tracking-wide"
            >Making business happen throughout Lane County, Oregon</p>
          </div>
        </div>
        <div class="hidden xl:block px-6 flex-1 relative">
          <div class="absolute inset-0 pb-64 -mt-64 pl-20">
            <img
              class="relative z-10 h-screen"
              style="max-width: none; !important;"
              src="/bizzbuzz-bee.svg"
              alt
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section-bee-left
      title="Our Network of Local Businesses Have Access to Exclusive Marketing Opportunities"
      description="Our Preferred Vendors Network is highly exclusive, allowing only a limited number of businesses from each category into the network."
      image="/img/730w/07-bizz-buzz.jpg"
      image-at2x="/img/730w/07-bizz-buzz@2x.jpg"
    />
    <!-- Section 3 -->
    <section-bee-right
      title="Connect with Other Local Businesses through Exclusive Local Business Networking Events"
      description="Get bizzy creating long-lasting referral relationships with other local business owners through our exclusive Preferred Vendor networking events held each and every month."
      image="/img/730w/02-bizz-buzz.jpg"
      image-at2x="/img/730w/02-bizz-buzz@2x.jpg"
    />
    <!-- Section 4 -->
    <section-bee-left
      title="We Provide Professional Marketing Assistance Tailored to Your Business"
      description="Each one of our members receive a 25-point marketing assessment to help define their unique needs. Then we deploy the latest marketing that will be the most effective for you."
      image="/img/730w/08-bizz-buzz.jpg"
      image-at2x="/img/730w/08-bizz-buzz@2x.jpg"
    />
    <!-- Section 5 -->
    <section-bee-right
      title="Gain Premium Exposure to Local Homeowners Through Our Exclusive Online Communities"
      description="Leveraging the power of collaboration we can help you gain massive exposure locally through our referral network that will put your business with a custom endorsement in front of tons of local homeowners."
      image="/img/730w/06-bizz-buzz.jpg"
      image-at2x="/img/730w/06-bizz-buzz@2x.jpg"
    />
    <!-- Section 6 -->
    <section-bee-left
      title="Receive Referrals through Our Preferred Vendor List Provided to Homeowners"
      description="Both online and offline, we’ve got you covered. Your information will be included in packages given to local homeowners as the exclusive preferred vendor for your category."
      image="/img/730w/15-bizz-buzz.jpg"
      image-at2x="/img/730w/15-bizz-buzz@2x.jpg"
    />
    <!-- Section 7 -->
    <section-bee-right
      title="Insider Marketing Tips are Part of the Dedicated Marketing Resources Available"
      description="We believe in empowering our members with resources to enhance their business and life. This is why we offer monthly learning sessions on topics that are current and relevant, along with an archive full of useful information that’s original and exclusive to our members."
      image="/img/730w/14-bizz-buzz.jpg"
      image-at2x="/img/730w/14-bizz-buzz@2x.jpg"
    />
  </main>
</template>

<script>
import SectionBeeRight from "~/components/SectionBeeRight.vue";
import SectionBeeLeft from "~/components/SectionBeeLeft.vue";

export default {
  components: {
    SectionBeeRight,
    SectionBeeLeft
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
