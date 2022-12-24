<script setup lang="ts">
import { useModal } from "~~/stores/ModalStore";
useMeta({
  title: "Votes",
});
const showCreateModal = () => useModal().toggleModal(true);
onBeforeMount(async () => {
  const { data } = await useFetch("/api/question/active", {
    method: "POST",
  });
});
</script>
<template>
  <section class="w-full h-full pb-5">
    <div class="grid grid-cols-1 h-full grid-rows-[1fr_70px]">
      <div
        class="flex px-4 py-4 flex-wrap md:justify-start justify-center h-full w-full"
      >
        <LiveVotes />
      </div>
      <div class="flex items-center justify-center h-full w-full">
        <UiButton @onClick="showCreateModal"> Create Question </UiButton>
      </div>
    </div>
  </section>
</template>
