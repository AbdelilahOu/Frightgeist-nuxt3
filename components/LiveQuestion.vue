<script setup lang="ts">
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

const leftTime = ref<string>("");
const Timer = ref();

onMounted(() => {
  const endTime = new Date(props.Ends).getTime() / 1000;
  Timer.value = setInterval(() => {
    const startTime = new Date().getTime() / 1000;
    const seconds = endTime - startTime;
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor((seconds % (3600 * 24)) / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);
    let dDisplay = d > 0 ? d + "d " : "";
    let hDisplay = h > 0 ? h + "h " : "";
    let mDisplay = m > 0 ? m + "m " : "";
    let sDisplay = s > 0 ? s + "s " : "";

    leftTime.value = dDisplay + hDisplay + mDisplay + sDisplay;
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
