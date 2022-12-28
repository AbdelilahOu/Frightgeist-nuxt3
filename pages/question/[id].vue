<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useQuestion } from "~~/stores/QuestionStore";
import { useUser } from "~~/stores/UserStore";
// use supabase composable
const { SubToSingleRow, UnsubFromChannel } = useSupaBase(
  Number(useRoute().params.id)
);
// use question store
const questionStore = useQuestion();
const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);
//
const VoteFor = (choice: string) => {
  const { user } = storeToRefs(useUser());
  if (user.value?.name) {
    questionStore.createVote(
      choice,
      Number(useRoute().params.id),
      user.value?.name
    );
  }
};

// SUB TO CHANNLE
onBeforeMount(() => {
  questionStore.pickChosenQuestion(Number(useRoute().params.id));
  SubToSingleRow();
});
// UNSUB
onBeforeUnmount(() => {
  UnsubFromChannel();
});
// get statestics
onMounted(() => {
  watch(
    () => ChosenQuestionVotes.value,
    (Votes) => {
      console.log(Votes);
    }
  );
});
</script>

<template>
  <div class="text-black h-full w-full">
    <div class="h-full w-full flex items-center justify-center">
      <div
        class="rounded-sm z-30 bg-white h-fit w-full p-2 sm:w-4/5 md:w-1/2 lg:w-1/3"
      >
        <h1 class="py-1 mb-2 text-base font-semibold">
          {{ ChosenQuestion?.title }}
        </h1>
        <div class="w-full h-full flex gap-2 flex-col">
          <QuestionOption
            @onVote="VoteFor"
            v-for="(option, index) in ChosenQuestion?.options"
            :key="index"
            :Option="option"
            :Progress="70"
          />
        </div>
      </div>
    </div>
  </div>
</template>
