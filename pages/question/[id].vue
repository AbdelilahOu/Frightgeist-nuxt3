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
  SubToSingleRow(Number(useRoute().params.id));
});
// UNSUB
onBeforeUnmount(() => {
  UnsubFromChannel();
});
</script>

<template>
  <div class="text-black">
    {{ ChosenQuestion }}
    <br />
    {{ VotesArray }}
  </div>
</template>
