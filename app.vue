<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModal } from "./stores/ModalStore";
import { useUser } from "./stores/UserStore";

const { IsModal } = storeToRefs(useModal());

onBeforeMount(() => {
  useUser().PresisteAuth();
});
</script>
<template>
  <main class="w-full h-full bg-gray-50 text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ModalParent v-if="IsModal" />
  </main>
</template>
