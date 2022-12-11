<script setup lang="ts">
const props = defineProps({
  PlaceHolder: {
    type: String,
    required: false,
  },
  Type: {
    type: String,
    required: false,
    default: "text",
  },
  Value: {
    type: String,
    required: false,
  },
  Disabled: {
    type: Boolean,
    required: false,
  },
  IsEmpty: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const inputValue = ref<string>(props.Value ?? "");

watch(
  () => props.Value,
  (newShorteLink) => {
    if (newShorteLink) {
      inputValue.value = newShorteLink;
    }
  }
);
</script>

<template>
  <div
    :class="[
      IsEmpty
        ? 'text-gray-300 grid transition-all  transform duration-200 grid-cols-[40px_1fr]'
        : 'text-gray-300 grid transition-all  transform duration-200 grid-cols-[0px_1fr]',
    ]"
  >
    <span
      class="w-full text-lg overflow-hidden h-full flex items-center justify-center font-semibold"
      >⚠</span
    >
    <input
      @input="$emit('onChange', inputValue)"
      v-model="inputValue"
      class="w-full h-fit text-black/90 px-3 py-2 rounded-sm border-2 border-gray-300 transition-all duration-200 focus:border-primary focus:outline-0 focus:shadow-md focus:TheShadow disabled:text-gray-400"
      :disabled="Disabled"
      :type="Type"
      :placeholder="PlaceHolder"
    />
  </div>
</template>
