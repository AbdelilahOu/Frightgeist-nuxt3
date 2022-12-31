<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNotifications } from "~~/stores/NotificationStore";
const NotificationStore = useNotifications();
const { Notification: text } = storeToRefs(NotificationStore);
</script>

<template>
  <main
    class="w-full h-full grid grid-rows-[60px_0px_1fr] grid-cols-1 transition-all duration-200"
  >
    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
      <h1 class="text-primary font-semibold text-lg">
        <nuxt-link to="/">Voting app</nuxt-link>
      </h1>
    </div>
    <div class="w-full h-full flex items-center justify-center">
      <transition>
        <Notification v-if="text !== ''" :Title="text" />
      </transition>
    </div>
    <slot />
  </main>
</template>
