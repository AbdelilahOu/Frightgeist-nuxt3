<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuestion } from "~~/stores/QuestionStore";
const questionStore = useQuestion();

const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);

onBeforeMount(() => {
  questionStore.pickChosenQuestion(Number(useRoute().params.id));
});
</script>

<template>
  <div class="text-black">{{ ChosenQuestion }}</div>
</template>
