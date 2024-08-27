<template>
  <div id="project" class="bg-neutral-900 py-24 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class=" text-lg leading-8 text-secondary-500 font-bold uppercase ">Latest Portfolio</p>
        <h2 class="text-xl font-bold tracking-tight text-neutral-50 sm:text-4xl mt-6"> Transforming Ideas into
          Exceptional </h2>
        <p class="mt-4 leading-8 text-neutral-500">Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and organizational</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <article v-for="(post, postIdx) in portfolioList" :key="post.id"
          class="flex flex-col items-start justify-between" :class="postIdx == 1 ? 'lg:col-span-2' : 'col-span-1'">
          <div class="relative w-full" :class="postIdx == 2 ? 'space-y-4' : ''">
            <img :src="post.imageUrl" :alt="postIdx"
              class="w-full  rounded-2xl bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              :class="postIdx == 2 ? 'lg:h-[17rem]' : 'lg:h-[35rem]'" />
            <img :src="post.author.imageUrl" :alt="postIdx" v-show="postIdx == 2"
              class="hidden lg:flex lg:mt-4 w-full lg:h-[17rem] rounded-2xl bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
          </div>

        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import image1 from '../../assets/portfolio/1.jpg'
import image2 from '../../assets/portfolio/2.jpg'
import image3 from '../../assets/portfolio/3.jpg'
import image4 from '../../assets/portfolio/4.jpg'

const portfolioList = [
  {
    id: 1,
    title: 'webdesign',
    imageUrl: image1,
    author: {
      imageUrl: ''
    }

  },
  {
    id: 2,
    title: 'ui/ux',
    imageUrl: image2,
    author: {
      imageUrl: ''
    }
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    imageUrl: image3,
    author: {
      imageUrl: image4
    },
  },
]
</script>
<style lang="">

</style>