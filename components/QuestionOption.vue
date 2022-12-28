<script setup lang="ts">
defineProps({
  Option: {
    type: String,
    required: true,
  },
  Progress: {
    type: Number,
    required: true,
    default: 0,
  },
});

const getBgColor = () => {
  const colors: string[] = ["red", "blue", "green", "orange", "brown"];
  return colors[Math.floor(Math.random() * colors.length)];
};
</script>
<template>
  <div
    class="cursor-pointer relative transition-all duration-200 whitespace-nowrap flex justify-between text-base font-semibold hover:text-gray-600 text-black w-full h-full rounded-sm border-2 px-2 py-[6px]"
    @click="$emit('onVote', Option)"
  >
    <span class="z-30 w-full h-full">
      {{ Option }}
    </span>
    <span> {{ Progress }} % </span>
    <div
      :style="`width:${Progress}%; background-color:${getBgColor()}`"
      :class="[
        'h-full absolute z-20 transform opacity-50 transition-all duration-200 top-0 left-0',
      ]"
    ></div>
  </div>
</template>
