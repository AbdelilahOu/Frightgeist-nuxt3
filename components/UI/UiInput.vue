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
  <!-- <div
    :class="[
      IsEmpty
        ? 'text-gray-300 grid transition-all  transform duration-200'
        : 'text-gray-300 grid transition-all  transform duration-200 ',
    ]"
  >
    
  </div> -->
  <input
    @input="$emit('onChange', inputValue)"
    v-model="inputValue"
    :class="[
      'w-full h-fit text-black/90 px-3 py-2 rounded-sm border-2  transition-all duration-200 focus:border-primary focus:outline-0 focus:shadow-md focus:TheShadow disabled:text-gray-400',
      IsEmpty ? 'border-red-400 placeholder:text-red-400' : 'border-gray-300',
    ]"
    :disabled="Disabled"
    :type="Type"
    :placeholder="PlaceHolder"
  />
</template>
