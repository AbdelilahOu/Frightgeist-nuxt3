<template>
  <button
    class="hover:TheShadow px-2 hover:border-primary py-2 text-gray-400 transition-all duration-200 border-2"
    :disable="IsDisabled"
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
  Class: {
    type: String,
  },
  IsDisabled: {
    type: Boolean,
  },
});
</script>
