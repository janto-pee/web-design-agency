<template>
  <div class="bg-neutral-900">
    <div class="relative">
      <div
        class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 flex items-center md:items-start flex-col lg:flex-row gap-8 lg:px-8 lg:py-44">
        <!-- left inner section -->
        <div class="basis-1/2">
          <span class="font-bold text-secondary-600 uppercase text-xl">Hello,</span> 

          <h1 class="mt-4 max-w-lg text-4xl font-bold tracking-tight text-neutral-50 sm:text-6xl">i’m Janto Pee a
            <br /><span class="text-secondary-500">web designer</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-neutral-400">A personal portfolio is a collection of your work,
            achievements, and skills that highlights your abilities and professional growth. It serves as </p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#"
              class="flex items-center gap-4 rounded-full border border-neutral-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 uppercase">
              <span>view portfolio</span>
              <ArrowRightCircleIcon class="w-4 h-4 text-neutral-50   rounded-full" />
            </a>
          </div>
        </div>
        <!-- right inner section -->
        <div>
          <img :src="heroImg" role="img"
            class="hidden lg:flex lg:absolute lg:right-12 lg:bottom-0 z-10 mx-auto w-[30rem] drop-shadow-xl" />
          <img :src="heroImg2" role="img" class="hero-glass lg:hidden" />

          <div class="hidden lg:flex flex-col gap-4 lg:absolute lg:right-8 xl:right-4 z-10 top-32">
            <LaVuejs class="w-10 h-10 text-green-500" />
            <AkReactFill class="w-10 h-10 text-blue-400" />
            <AkAngularFill class="w-10 h-10 text-red-800" />
            <LaNodeJs class="w-10 h-10 text-green-400" />
            <BxGoLang class="w-10 h-10 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ArrowRightCircleIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import heroImg from '../../assets/hero/heroImg2.png'
import heroImg2 from '../../assets/hero/heroImg3.png'
import { AkAngularFill, AkGithubFill, AkReactFill, BxGoLang, LaNodeJs, LaVuejs, ReReactjsLine, TaBrandGolang } from '@kalimahapps/vue-icons'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>
<style lang="">

</style>