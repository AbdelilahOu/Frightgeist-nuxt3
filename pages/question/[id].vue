<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuestion } from "~~/stores/QuestionStore";
const questionStore = useQuestion();

const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);

console.log(ChosenQuestionVotes.value);
const { SubToChannel, VotesArray } = useSupaBase();

onBeforeMount(() => {
  questionStore.pickChosenQuestion(Number(useRoute().params.id));

  SubToChannel(Number(useRoute().params.id));
});
</script>

<template>
  <div class="text-black">
    {{ ChosenQuestion }}
    <br />
    {{ VotesArray }}
  </div>
</template>
