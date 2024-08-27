<template>
  <div>
    <Disclosure as="header" class="bg-neutral-900" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-4">
        <div class="relative flex h-16 justify-between items-center">
          <!-- site logo -->
          <div class="relative z-10 flex px-2 lg:px-0">
            <div class="flex flex-shrink-0 items-center gap-2">
              <img class="block h-8 w-auto rounded-full bg-secondary-500" src="/dark-logo-2.png" alt="Janto Pee" />
              <span class="text-neutral-50 text-xl font-bold">Janto Pee</span>
            </div>
          </div>
          <!-- nav items -->
          <nav class="hidden lg:flex lg:space-x-4 lg:py-2" aria-label="Global">
            <router-link v-for="item in navigation" :key="item.name" :to="item.href" exact-active-class="text-white" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
          </nav>
          <!-- mobile icon -->
          <div class="relative z-10 flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- right items -->
          <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center lg:space-x-4">
            <router-link v-for="item in social" :key="item.name" :to="item.href">
              <component :is="item.name" class="h-4 w-4 text-neutral-400" />
            </router-link>
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full border-2 border-secondary-500" :src="user.imageUrl" alt="" />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[
            item.current
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
            'block rounded-md py-2 px-3 text-base font-medium',
          ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-neutral-700 pb-3 pt-4">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-neutral-400">
                {{ user.email }}
              </div>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  BsThreads,
  BxFacebook,
  BxInstagram,
  BxTwitter,
} from "@kalimahapps/vue-icons";
import image1 from "../../assets/banner-04.png";

const user = {
  name: "Janto Pee",
  email: "atomicfirestartups@gmail.com",
  imageUrl: image1,
};
const navigation = [
  { name: "Service", href: "#service", current: true },
  { name: "Projects", href: "#project", current: false },
  { name: "Blog", href: "#blog", current: false },
  { name: "Contact", href: "#contact", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const social = [
  { name: BxFacebook, href: "#" },
  { name: BxTwitter, href: "#" },
  { name: BxInstagram, href: "#" },
  { name: BsThreads, href: "#" },
];
</script>
<style lang=""></style>
