<script setup lang="ts">
import { storeToRefs } from "pinia";
import useQuestionCookie from "~~/composables/useQuestionCookie";
import { useQuestion } from "~~/stores/QuestionStore";
import { useUser } from "~~/stores/UserStore";

// variables
const { timerSecond, timerDate } = useTimer();
const ProgressObject = ref<{ [key: string]: number }>({});
const Disable = ref<boolean>(false);
const ExpiresIn = ref<string>("");
const Timer = ref();
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
//
const TimeHaveEnded = () => {
  console.log("time ended");
};
// SUB TO CHANNLE AND GET QUESTION
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
  // get the votes
  questionStore.getChosenQuestionVotes(Number(useRoute().params.id));
  // watch the votes
  watch(
    () => ChosenQuestionVotes.value,
    (Votes) => {
      if (Votes) {
        const Total = Votes.reduce((acc, vote) => acc + vote._count._all, 0);
        Votes.forEach((vote) => {
          ProgressObject.value[vote.choice] = Math.floor(
            (vote._count._all / Total) * 100
          );
        });
      }
    }
  );
  // watch the time
  Timer.value = setInterval(() => {
    if (ChosenQuestion.value?.endsAt) {
      const { endsAt } = ChosenQuestion.value;
      const endsSeconds = new Date(endsAt).getTime();
      ExpiresIn.value = timerDate(endsSeconds);
      if (timerSecond(endsSeconds)) {
        Disable.value = true;
        clearInterval(Timer.value);
        TimeHaveEnded();
      }
    }
  }, 1000);
});
onUnmounted(() => {
  clearInterval(Timer.value);
});
</script>

<template>
  <div class="text-black h-full w-full">
    <div
      class="h-full w-full grid grid-cols-1 grid-rows-3 items-center justify-center"
    >
      <div
        class="h-full font-extrabold text-gray-400 text-6xl w-full flex items-center justify-center"
      >
        <span>
          {{ ExpiresIn !== "" ? ExpiresIn : "00h 00m 00s" }}
        </span>
      </div>
      <div
        class="rounded-sm z-30 bg-white h-fit w-full p-2 sm:w-4/5 md:w-1/2 lg:w-1/3"
      >
        <h1 class="py-1 mb-2 text-base font-semibold">
          {{ ChosenQuestion?.title }}
        </h1>
        <div class="w-full h-full flex gap-2 flex-col">
          <QuestionOption
            v-for="(option, index) in ChosenQuestion?.options"
            @onVote="VoteFor"
            :Progress="ProgressObject[option]"
            :IsDisabled="Disable"
            :Option="option"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
