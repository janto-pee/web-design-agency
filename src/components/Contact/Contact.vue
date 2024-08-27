<template >
    <div id="contact" class="relative isolate bg-neutral-900 py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="py-8 text-center">
          <p class="text-secondary-500 uppercase text-sm font-bold mb-2 text-center ">Get in Touch</p>
                <h2 class="text-2xl font-bold tracking-tight text-neutral-50 sm:text-4xl mt-6">Elevate your brand with a theme</h2>

        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 mt-12">
          <div v-for="feature in features" :key="feature.name" class="bg-neutral-800/40 text-center p-8 rounded-xl">
            <div class="flex items-center justify-center ">
            <component :is="feature.icon" class="h-16 w-16 text-secondary-500 text-center bg-secondary-900/30 rounded-full p-4 border border-secondary-800" /> 
          </div> 
            <dt class="text-xl font-semibold leading-7 text-neutral-100 mt-4">
                {{ feature.name }}
            </dt>
            <dd class="mt-5 text-base leading-7 text-neutral-400">{{ feature.description1 }}</dd>
            <dd class="mt-2 text-base leading-7 text-neutral-400">{{ feature.description2 }}</dd>
          </div>
        </dl>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-12 py-8 gap-8">
          <div >
            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-xl">
              <p class="mt-6 text-lg leading-8 text-neutral-300">Fished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted ished fact that a reader will be distrol acted.</p>
              <dl class="mt-10 space-y-4 text-base leading-7 text-neutral-300">
                <div v-for="office in headOffices" :key="office.id" class="flex gap-x-4">
                  <dt class="flex items-center gap-4">
                    <BuildingOffice2Icon class="h-7 w-6 text-neutral-400" aria-hidden="true" />
                    <span class="">{{ office.name }}:</span>
                  </dt>
                  <dd>{{ office.title }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <contact-form />
        </div>
      </div>
  </div>
</template>
<script setup>
import { ByLocation, CaEmail } from '@kalimahapps/vue-icons';
import ContactForm from './ContactForm.vue';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneArrowDownLeftIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import { GlobeAltIcon } from '@heroicons/vue/16/solid';

const features = [
  {
    name: 'Address',
    description1:
      'Dhaka 102, utl 1216, road 45 ',
      description2: 'house of street',
    icon: ByLocation,
  },
  {
    name: 'Email',
    description1:
      'hasan@yourmail.com',
      description2: 'Suppport@emailhub.net.com',
    icon: CaEmail,
  },
  {
    name: 'Contact Us',
    description1:
      '0000 - 000 - 000 00',
      description2: '+1234 - 000',
    icon: PhoneArrowDownLeftIcon,
  }
]

const headOffices= [
  {
    id: 1,
    name: 'Africa Head Office',
    title: 'Lagos'
  },
  {
    id: 2,
    name: 'North America Head Office',
    title: 'Texas'
  },
  {
    id: 3,
    name: 'South America Head Office',
    title: 'Sao Paulo'
  },
  {
    id: 4,
    name: 'Asia Head Office', 
    title: 'Hyderabad'
  },
  {
    id: 5,
    name: 'Australia Head Office',
    title: 'Sydney'
  },
]
</script>
<style lang="">
    
</style>