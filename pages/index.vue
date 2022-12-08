<script setup lang="ts">
const { $trpc } = useNuxtApp();
onMounted(async () => {
  const data = await $trpc.questionRouter.question.query({
    text: "ldhfksds",
  });
  console.timeLog(data.greeting);
}),
  definePageMeta({
    middleware: ["auth"],
  });
</script>
<template>
  <main class="w-full h-full bg-primary"></main>
</template>
