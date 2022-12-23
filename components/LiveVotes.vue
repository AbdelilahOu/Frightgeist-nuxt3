<template>
  <div
    class="text-black w-80 h-80 bg-gray-200 overflow-hidden rounded-sm grid grid-rows-[1fr_40px]"
  >
    <div></div>
    <nuxt-link
      class="w-full hover:bg-gray-300 hover:text-gray-600 text-base font-semibold text-gray-500 transition-all duration-200 h-full flex items-center justify-center"
      :to="`/question/${1}`"
    >
      <span> Partecipate </span>
    </nuxt-link>
  </div>
</template>
