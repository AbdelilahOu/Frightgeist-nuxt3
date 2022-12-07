<script setup lang="ts">
const props = defineProps({
  Placeholder: {
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
  FocusClass: {
    type: String,
    required: false,
    default: "",
  },
  DisabledClass: {
    type: String,
    required: false,
    default: "",
  },
  MoreClass: {
    type: String,
    required: false,
    default: "",
  },
});

const inputValue = ref<string>(!props.Value ? "" : props.Value);

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
  <input
    @input="$emit('onChange', inputValue)"
    v-model="inputValue"
    :class="[
      'w-full h-fit text-black/90 px-3 py-2 rounded-sm border-2 border-gray-300 transition-all duration-200',
      DisabledClass,
      FocusClass,
      MoreClass,
    ]"
    :disabled="Disabled"
    :type="Type"
    :placeholder="Placeholder"
  />
</template>
