<script setup lang="ts">
import { useModal } from "~~/stores/ModalStore";

const closeThisModal = () => useModal().toggleModal(false);
</script>
<template>
  <div
    @click.self="closeThisModal"
    class="h-full z-20 absolute top-0 w-full flex items-center justify-center bg-transparent bg-opacity-40 bg-slate-200"
  >
    <keep-alive>
      <CreateQuestion />
    </keep-alive>
  </div>
</template>
