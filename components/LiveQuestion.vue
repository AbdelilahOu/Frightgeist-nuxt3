<script setup lang="ts">
import useTimer from "~~/composables/useTimer";

const props = defineProps({
  Id: {
    type: Number,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Ends: {
    type: String,
    required: true,
  },
});
//
const { timerDate } = useTimer();
const leftTime = ref<string>("");
const Timer = ref();
//
onMounted(() => {
  const endTime = new Date(props.Ends).getTime();
  Timer.value = setInterval(() => {
    leftTime.value = timerDate(endTime);
    if (leftTime.value == "") {
      clearInterval(Timer.value);
    }
  }, 1000);
});
onUnmounted(() => {
  clearInterval(Timer.value);
});
</script>

<template>
  <div
    class="text-black w-80 h-80 bg-gray-200 overflow-hidden rounded-sm grid grid-rows-[1fr_40px]"
  >
    <div class="text-black h-full w-full grid grid-rows-[40px_1fr]">
      <div class="flex p-1 justify-center">
        <span
          class="bg-gray-400 h-fit w-full text-center text-base font-semibold rounded-sm p-1"
          >{{ leftTime }}</span
        >
      </div>
      <div class="text-center">
        {{ Title }}
      </div>
    </div>
    <nuxt-link
      class="w-full hover:bg-gray-300 hover:text-gray-600 text-base font-semibold text-gray-500 transition-all duration-200 h-full flex items-center justify-center"
      :to="`question/${Id}`"
    >
      <span> Partecipate </span>
    </nuxt-link>
  </div>
</template>
