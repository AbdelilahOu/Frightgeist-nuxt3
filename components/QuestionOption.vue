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
  Color: {
    type: String,
  },
  IsDisabled: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <button
    class="cursor-pointer disabled:bg-gray-300 disabled:hover:text-black text-start relative transition-all duration-200 whitespace-nowrap flex justify-between text-base font-semibold hover:text-gray-600 text-black w-full h-full rounded-sm border-2 px-2 py-[6px]"
    :disabled="IsDisabled"
    @click="$emit('onVote', Option)"
  >
    <span class="z-30 w-full h-full">
      {{ Option }}
    </span>
    <span> {{ Progress }} % </span>
    <div
      v-if="!IsDisabled"
      :style="`width:${Progress}%; background-color:${Color}`"
      :class="[
        'h-full  absolute z-20 transform opacity-50 transition-all duration-200 top-0 left-0',
      ]"
    ></div>
  </button>
</template>
