<template>
  <footer class="bg-neutral-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div>
          <img class="h-14 bg-secondary-500 rounded-full" src="/dark-logo-2.png" alt="AFS" />
          <p class='mt-4  text-neutral-200 leading-9'>
            Lorem ipsum dolor sit amet consectetur, adipisicing ste tempore maxime, exercitationem, ipsum! </p>
          <div class="flex items-center gap-4 mt-6">
            <router-link v-for="item in social" :key="item.name" :to="item.href">
              <component :is="item.name" class="h-4 w-4 text-neutral-400" />
            </router-link>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-neutral-50">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-neutral-300 hover:text-neutral-100">{{ item.name
                    }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-neutral-50">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name" class="flex items-center gap-2">
                  <ChevronDoubleRightIcon class="text-secondary-500 w-4 h-4" />
                  <a :href="item.href" class="text-sm leading-6 text-neutral-300 hover:text-neutral-100">{{ item.name
                    }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-neutral-50">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-neutral-300 hover:text-neutral-100">{{ item.name
                    }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-neutral-50">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-neutral-300 hover:text-neutral-100">{{ item.name
                    }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/20/solid";
import {
  BsThreads,
  BxFacebook,
  BxInstagram,
  BxTwitter,
} from "@kalimahapps/vue-icons";

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],

  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Policy', href: '#' },
  ],
}
const social = [
  { name: BxFacebook, href: "#" },
  { name: BxTwitter, href: "#" },
  { name: BxInstagram, href: "#" },
  { name: BsThreads, href: "#" },
];
</script>
<style lang="">

</style>