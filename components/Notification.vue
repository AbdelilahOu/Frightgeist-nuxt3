<script setup lang="ts">
defineProps({
  Title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="w-fit absolute top-[62px] w-min-[200px] z-40 rounded-sm text-gray-800 font-semibold h-fit py-2 px-4 bg-gray-300 text-center"
  >
    {{ Title }}
  </div>
</template>
