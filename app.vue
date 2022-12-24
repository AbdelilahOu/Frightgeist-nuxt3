<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModal } from "./stores/ModalStore";
const { IsModal } = storeToRefs(useModal());
</script>
<template>
  <main class="w-full h-full bg-gray-50 text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ModalParent v-if="IsModal" />
  </main>
</template>
