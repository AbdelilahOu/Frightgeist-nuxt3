<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuestion } from "~~/stores/QuestionStore";
// use supabase composable
const { SubToSingleRow, UnsubFromChannel, VotesArray } = useSupaBase();
// use question store
const questionStore = useQuestion();
const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);
// SUB TO CHANNLE
onBeforeMount(() => {
  questionStore.pickChosenQuestion(Number(useRoute().params.id));
  SubToSingleRow();
});
// UNSUB
onBeforeUnmount(() => {
  UnsubFromChannel();
});
</script>

<template>
  <div class="text-black h-full w-full">
    <div class="h-full w-full flex items-center justify-center">
      <div class="grid grid-cols-1 grid-rows-[30px_1fr]">
        <h1>{{ ChosenQuestion?.title }}</h1>
        <div class="w-full h-full flex flex-col">
          <span v-for="(option, index) in ChosenQuestion?.options" :key="index">
            {{ option }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
