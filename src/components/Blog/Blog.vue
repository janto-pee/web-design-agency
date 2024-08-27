<template>
     <div id="blog" class="bg-neutral-900 py-24 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class=" text-lg leading-8 text-secondary-500 font-bold uppercase ">Blog and News</p>
        <h2 class="text-2xl font-bold tracking-tight text-neutral-50 sm:text-4xl mt-6"> Elevating Personal Branding the through Powerful Portfolios </h2>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-14">
        <article v-for="post in posts" :key="post.id" class="relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
          <img :src="post.imageUrl" alt="" class="h-full w-full rounded-b-2xl" />
          <!-- <div class="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-900 via-neutral-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-neutral-900/10" /> -->

          <div class="absolute top-4 left-4 rounded-xl px-4 flex lg:flex-col xl:flex-row  gap-y-1 overflow-hidden text-sm leading-6 text-neutral-300 bg-black">
            <div class="flex items-center ">
              <CalendarDateRangeIcon class="w-4 h-4 mr-2" />
              <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
            </div>
            <div class="flex items-center">
              <UserCircleIcon class="w-4 h-4 mr-2" />
              <div class="">
                {{ post.author.name }}
              </div>
            </div>
          </div>
          <div class="mt-2 px-4">
            <h3 class="mt-6 text-lg font-semibold leading-6 text-white">
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>

            <p class="capitalize font-semibold flex items-center text-neutral-200 text-sm mt-4 mb-8">Read More 
              <ChevronRightIcon class="w-4 h-4 ml-2" />
            </p>

          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CalendarDateRangeIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import image1 from '../../assets/blog/blog-4.jpg'
import image2 from '../../assets/blog/blog-5.jpg'
import image3 from '../../assets/blog/blog-6.jpg'
const posts = [
  {
    id: 1,
    title: 'Inspiring the World, One Project at a Time for the man',
    href: '#',
      imageUrl: image1,
      date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
     },
  },
  {
    id: 2,
    title: 'Inspiring the World, One Project at a Time for the man',
    href: '#',
      imageUrl: image2,
      date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
     },
  },
  {
    id: 3,
    title: 'Inspiring the World, One Project at a Time for the man',
    href: '#',
      imageUrl: image3,
      date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
     },
  }

]
</script>
<style lang="">
    
</style>