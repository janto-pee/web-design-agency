<template>
  <div>
    <form ref="contactForm" @submit.prevent="handleSubmit">
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-white sr-only">First name</label>
            <div class="mt-2.5">
              <input placeholder="First name" type="text" required name="first-name" id="first-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6 " />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-white sr-only">Last name</label>
            <div class="mt-2.5">
              <input placeholder="last name" type="text" required name="last-name" id="last-name"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-white sr-only">Email</label>
            <div class="mt-2.5">
              <input type="email" name="email" id="email" required placeholder="email"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-white sr-only">Phone
              number</label>
            <div class="mt-2.5">
              <input type="tel" name="phone-number" id="phone-number" placeholder="phone"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-white sr-only">Message</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" required placeholder="message" rows="4"
                class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-start">
          <button type="submit" :disabled="isSubmitting"
            class="rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
            :class="isSubmitting ? 'bg-secondary-300 hover:bg-secondary-300':  'bg-secondary-700 hover:bg-secondary-400' ">Appointment
            Now</button>
        </div>
      </div>
    </form>

  </div>
</template>
<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const isSubmitting = ref(false)
const contactForm = ref(null)

async function handleSubmit(e) {
  isSubmitting.value = true
  try {
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/xanwvwrr", {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    contactForm.value.reset();
    toast("form successfully submitted !", {
        autoClose: 1000,
      })
  } catch (error) {
    toast(error, {
        autoClose: 1000,
      });
  }
  isSubmitting.value = false
}
</script>
<style lang="">

</style>