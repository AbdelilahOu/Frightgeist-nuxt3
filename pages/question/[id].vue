<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuestion } from "~~/stores/QuestionStore";

const questionStore = useQuestion();
const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);

const { SubToSingleRow, UnsubFromChannel, VotesArray } = useSupaBase();

onBeforeMount(() => {
  questionStore.pickChosenQuestion(Number(useRoute().params.id));
  SubToSingleRow(Number(useRoute().params.id));
});

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
