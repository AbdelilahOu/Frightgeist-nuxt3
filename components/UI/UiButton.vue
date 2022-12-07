<template>
  <button
    :disable="IsDisabled"
    :class="[
      'cursor-pointer disabled:shadow-none disabled:bg-gray-300 disabled:border-gray-600 disabled:hover:border-gray-600 rounded-md transition-all  border-2 px-4 py-2 w-full text-center h-fit hover:shadow-md duration-300',
      Type == 'primary'
        ? 'bg-primary border-primary text-white hover:bg-primary/80 hover:border-primary/80 '
        : Type == 'secondary'
        ? ' border-primary text-primary hover:text-primary/80 hover:border-primary/80'
        : 'bg-primary/20 border-primary text-primary hover:text-primary/80 hover:border-primary/80 hover:bg-primary/10',
    ]"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  Type: {
    type: String,
  },
  IsDisabled: {
    type: Boolean,
  },
});
</script>
