<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <section class="w-full h-full flex flex-col items-center content-center">
    <CreateQuestion />
  </section>
</template>
