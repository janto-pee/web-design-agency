<template>
  <div id="service" class="bg-neutral-900 py-12 lg:py-24 lg:border-t lg:border-neutral-700">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <dl class="mt-16 grid grid-cols-1 gap-8  rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id"
            class="flex flex-col items-center p-8 rounded-xl border border-secondary-500/50 lg:border-secondary-500/30">
            <component :is="stat.icon" class="h-12 w-12 text-secondary-400" />
            <dt class="mt-10 tracking-tight text-lg font-semibold leading-6 text-neutral-200 capitalize">{{ stat.name }}
            </dt>
            <dd class="mt-2 text-neutral-100 text-sm ">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>

      <div
        class="mt-16 lg:mt-28 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="p-8 bg-hero flex flex-col items-center justify-center">
          <div class="flex gap-4 items-center text-start w-full">
            <h2 class="text-3xl font-bold tracking-tight text-secondary-500 sm:text-[6rem]">25</h2>
            <p class="text-3xl font-bold tracking-tight text-neutral-50 sm:text-5xl">Years of <br /> Experience</p>
          </div>
          <p class="mt-8 text-base leading-7 text-neutral-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Unde, quos magnam! Ab na! amet consectetur adipisicing elit.</p>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 ">
          <div v-for="feature in features" :key="feature.name" class="bg-neutral-800/25 text-center p-8">
            <dt class="text-3xl font-semibold leading-7 text-neutral-50">
              {{ feature.name }}

            </dt>
            <dd class="mt-5 text-base leading-7 text-neutral-500">{{ feature.description }}</dd>
          </div>
        </dl>

      </div>
    </div>
  </div>
</template>
<script setup>
const stats = [
  { id: 1, icon: BsHourglass, name: 'Web Design', value: '50 projects' },
  { id: 2, icon: IcDesignPencil, name: 'UI/UX Design', value: '30 projects' },
  { id: 3, icon: CaWebServicesService, name: 'Web Research', value: '15 projects' },
  { id: 4, icon: LightBulbIcon, name: 'Marketing', value: '20 projects' },
]

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, LightBulbIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { BsHourglass, CaWebServicesService, IcDesignPencil, MdOutlinedWebStories, MdSharpIceSkating } from '@kalimahapps/vue-icons';

const features = [
  {
    name: '20+',
    description:
      'Our Project Complete ',
    icon: TrashIcon,
  },
  {
    name: '80%',
    description:
      'Our Natural Projects',
    icon: PencilSquareIcon,
  },
  {
    name: '400',
    description:
      'Client Review',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: '55+',
    description:
      'Our Satisfied Client',
    icon: HeartIcon,
  },
]
</script>
<style lang="">

</style>