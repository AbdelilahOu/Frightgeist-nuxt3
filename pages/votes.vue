<script setup lang="ts">
useMeta({
  title: "Votes",
});

onBeforeMount(async () => {
  const { data } = await useFetch("/api/question/all", {
    method: "POST",
  });
  alert(data.value);
});
</script>
<template>
  <section class="w-full h-full pb-5">
    <div class="grid grid-cols-1 h-full grid-rows-[1fr_70px]">
      <div class="flex px-4 py-4 flex-wrap h-full w-full">
        <LiveVotes />
      </div>
      <div class="flex items-center justify-center h-full w-full">
        <UiButton> Create Question </UiButton>
      </div>
    </div>
  </section>
</template>
