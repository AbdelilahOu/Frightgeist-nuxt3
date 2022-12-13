<template>
  <main class="w-full h-full grid grid-rows-[60px_1fr] grid-cols-1">
    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
      <h1 class="text-primary font-semibold text-lg">
        <nuxt-link to="/">Voting app</nuxt-link>
      </h1>
    </div>
    <slot />
  </main>
</template>
