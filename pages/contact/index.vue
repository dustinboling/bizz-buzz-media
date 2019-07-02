<template>
  <section>
    <div class="container mx-auto">
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
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
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
