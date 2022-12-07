<template>
  <div class="w-full h-fit flex flex-col">
    <h1 class="text-start text-sm">{{ Label }}</h1>
    <input
      class="focus:border-primary focus:outline-none transition focus:shadow-md duration-300 mt-1 block h-10 w-full rounded-md border-2 border-gray-200 px-2 sm:text-sm"
      @input="$emit('onChange', { value, key: Label })"
      :type="Type ? Type : 'text'"
      :placeholder="PlaceHolder"
      v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref<string>();
defineProps({
  Label: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
  },
  PlaceHolder: {
    type: String,
  },
});
</script>
