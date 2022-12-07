<template>
  <button :disable="IsDisabled" :class="[Class]" @click="$emit('onClick')">
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
