<script setup lang="ts">
const { $client } = useNuxtApp();

definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <main class="w-full h-full bg-primary"></main>
</template>
