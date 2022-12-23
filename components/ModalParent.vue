<script setup lang="ts">
import { useModal } from "~~/stores/Modal";

const closeThisModal = () => useModal().toggleModal(false);
</script>
<template>
  <div
    @click.self="closeThisModal"
    class="h-full z-20 absolute top-0 w-full flex items-center justify-center bg-transparent bg-opacity-20 bg-slate-100"
  >
    <CreateQuestion />
  </div>
</template>
