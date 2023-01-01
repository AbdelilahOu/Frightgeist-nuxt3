<script setup lang="ts">
import { useQuestion } from "~~/stores/QuestionStore";
import { useUser } from "~~/stores/UserStore";
import { storeToRefs } from "pinia";

// variables
//
const ProgressObject = ref<{ [key: string]: number }>({});
const questionId: number = Number(useRoute().params.id);
const Disable = ref<boolean>(false);
const ExpiresIn = ref<string>("");
const WinnerIndex = ref<number>();
const Timer = ref();
// use  composables
// use  stores
const questionStore = useQuestion();
const { clearVoteId } = useQuestionCookie();
const { ChosenQuestion, ChosenQuestionVotes } = storeToRefs(questionStore);
const { SubToSingleRow, UnsubFromChannel } = useSupaBase(questionId);
const { timerSecond, timerDate } = useTimer();
const { user } = storeToRefs(useUser());
//
const VoteFor = (choice: string) => {
  if (user.value?.name) {
    questionStore.createVote(choice, questionId, user.value?.name);
  }
};
//
const TimeHaveEnded = () => {
  let maxValueKey: string = Object.keys(ProgressObject.value)[0];
  let max = 0;
  for (const [key, value] of Object.entries(ProgressObject.value)) {
    if (value >= max) {
      max = value;
      maxValueKey = key;
    }
  }
  // get index
  // get the value with the most votes
  // invert the keys and values
  // use it to get the index
  WinnerIndex.value = Object.fromEntries(
    Object.entries(ChosenQuestion.value?.options).map(
      ([key, value]): [any, string] => [value, key]
    )
  )[maxValueKey];
};
// SUB TO CHANNLE AND GET QUESTION
onBeforeMount(() => {
  questionStore.pickChosenQuestion(questionId);
  SubToSingleRow();
});
// UNSUB
onBeforeUnmount(() => {
  UnsubFromChannel();
});
// get statestics
onMounted(() => {
  // get the votes
  questionStore.getChosenQuestionVotes(questionId);
  const name = user.value?.name;
  if (name) {
    questionStore.getCreatedVote(name, questionId);
  }
  // watch the votes
  watch(
    () => ChosenQuestionVotes.value,
    (Votes) => {
      if (Votes) {
        Votes.forEach((vote) => {
          ProgressObject.value[vote.choice] = vote.percent;
        });
      }
    },
    {
      deep: true,
      immediate: true,
    }
  );
  // watch the time
  Timer.value = setInterval(() => {
    if (ChosenQuestion.value?.endsAt) {
      const { endsAt } = ChosenQuestion.value;
      const endsSeconds = new Date(endsAt).getTime();
      ExpiresIn.value = timerDate(endsSeconds);
      if (!timerSecond(endsSeconds)) {
        Disable.value = true;
        clearInterval(Timer.value);
        TimeHaveEnded();
        clearVoteId();
      }
    }
  }, 1000);
});
onUnmounted(() => {
  clearInterval(Timer.value);
  clearVoteId();
});
</script>

<template>
  <div class="text-black h-full w-full">
    <div
      class="h-full w-full grid grid-cols-1 grid-rows-3 items-center justify-center"
    >
      <div
        class="h-full font-extrabold text-gray-400 text-5xl sm:text-6xl w-full flex items-center justify-center"
      >
        <span>
          {{ ExpiresIn !== "" ? ExpiresIn : "00h 00m 00s" }}
        </span>
      </div>
      <div class="flex h-full w-full justify-center items-center">
        <div
          class="rounded-sm flex flex-col z-30 h-fit w-full p-2 sm:w-4/5 md:w-1/2 lg:w-1/3"
        >
          <h1 class="py-1 mb-2 font-semibold text-xl">
            {{ ChosenQuestion?.title }}
          </h1>
          <div
            class="w-full h-full items-center justify-center flex gap-2 flex-col"
          >
            <QuestionOption
              v-for="(option, index) in ChosenQuestion?.options"
              @onVote="VoteFor"
              :Progress="ProgressObject[option]"
              :Winner="WinnerIndex === index"
              :IsDisabled="Disable"
              :Option="option"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
