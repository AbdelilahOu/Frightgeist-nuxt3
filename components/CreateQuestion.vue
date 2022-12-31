<script setup lang="ts">
import useQuestionCookie from "~~/composables/useQuestionCookie";
import { useNotifications } from "~~/stores/NotificationStore";
import useOurFetch from "~~/composables/useOurFetch";
import { useQuestion } from "~~/stores/QuestionStore";
import { useModal } from "~~/stores/ModalStore";
import { useUser } from "~~/stores/UserStore";
import { storeToRefs } from "pinia";
// create data
const { user } = storeToRefs(useUser());
const options = ref<string[]>([""]);
const question = ref<string>("");
const endsAt = ref<number>(0);
// change create data

const removeAnOption = (index: number) => options.value.splice(index, 1);
const changeQuestion = ([text]: [string]) => (question.value = text);
const changeEndsAt = ([time]: [number]) => (endsAt.value = time);
const changeOption = ([text, id]: [string, number]) => {
  options.value[id] = text;
};
const addAnOption = () => {
  if (options.value.length <= 4) {
    options.value.push("");
    return;
  }
  useNotifications().updateSingle("Too many options");
};

const CreatePollQuestion = async () => {
  // { title, options, userId, endsAt }
  const AllFilled =
    question.value !== "" && options.value.length >= 2 && endsAt.value !== 0;
  if (!AllFilled) {
    return;
  }
  const data: any = await useOurFetch("/api/question/create", {
    method: "POST",
    body: {
      question: {
        options: Object.assign(
          {},
          options.value.filter((ele) => ele !== "")
        ),
        userId: user.value?.id ?? 1,
        title: question.value,
        endsAt: new Date(new Date().getTime() + endsAt.value * 60 * 1000),
      },
    },
  });
  if (data) {
    // navigate to created question
    navigateTo(`question/${data.createdQuestion.id}`);
    // force creator to stay
    const { setQuestionCookie } = useQuestionCookie(endsAt.value);
    setQuestionCookie(data.createdQuestion.id);
    // hide create quetion modal
    useModal().toggleModal(false);
  }
};
</script>

<template>
  <div
    class="rounded-sm z-30 bg-white/20 h-fit w-full p-2 sm:w-4/5 md:w-1/2 lg:w-1/3"
  >
    <div class="h-full w-full gap-4 flex flex-col">
      <UiInput
        :IsEmpty="false"
        PlaceHolder="Question"
        @onChange="changeQuestion"
      />
      <div class="grid grid-cols-[1fr_70px] gap-1">
        <UiInput
          :IsEmpty="false"
          PlaceHolder="End in ... 5 minutes"
          @onChange="changeEndsAt"
          Type="number"
        />
        <span
          class="h-full w-full font-semibold text-gray-400 border-gray-300 border-2 bg-gray-200 flex items-center justify-center rounded-sm text-center"
        >
          <span> minutes </span>
        </span>
      </div>
      <div class="flex flex-col">
        <TransitionGroup name="list">
          <div
            class="grid grid-cols-[1fr_0px] last:pb-0 pb-4 overflow-x-hidden hover:gap-2 transition-all duration-200 hover:grid-cols-[1fr_50px]"
            v-for="(option, index) in options"
            :key="index"
          >
            <UiInput
              :IsEmpty="false"
              :Id="index"
              PlaceHolder="Option"
              @onChange="changeOption"
            />
            <UiButton @onClick="removeAnOption">X</UiButton>
          </div>
        </TransitionGroup>
        <UiButton @onClick="addAnOption">Add an option</UiButton>
      </div>
      <UiButton @onClick="CreatePollQuestion">Create</UiButton>
    </div>
  </div>
</template>
