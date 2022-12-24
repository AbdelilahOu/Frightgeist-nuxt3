<script setup lang="ts">
import { useUser } from "~~/stores/UserStore";
import { storeToRefs } from "pinia";
import useOurFetch from "~~/composables/useOurFetch";
import { useModal } from "~~/stores/ModalStore";
// create data
const { user } = storeToRefs(useUser());
const options = ref<string[]>([""]);
const question = ref<string>("");
const endsAt = ref<string>();
// change create data

const removeAnOption = (index: number) => options.value.splice(index, 1);
const changeQuestion = ([text]: string) => (question.value = text);
const changeEndsAt = ([date]: string) => (endsAt.value = date);
const changeOption = ([text, id]: [string, number]) => {
  options.value[id] = text;
};
const addAnOption = () => options.value.push("");

const CreatePollQuestion = async () => {
  // { title, options, userId, endsAt }
  const AllFilled =
    question.value !== "" && options.value.length >= 2 && endsAt.value !== "";
  if (!AllFilled) {
    return;
  }
  const data = await useOurFetch("/api/question/create", {
    method: "POST",
    body: {
      question: {
        options: Object.assign({}, options.value),
        userId: user.value?.id ?? 1,
        title: question.value,
        endsAt: endsAt.value,
      },
    },
  });
  if (data) {
    useModal().toggleModal(false);
  }
};
</script>

<template>
  <div class="rounded-sm h-fit w-full p-2 sm:w-4/5 md:w-1/2 lg:w-1/3">
    <div class="h-full w-full gap-4 flex flex-col">
      <UiInput
        :IsEmpty="false"
        PlaceHolder="Question"
        @onChange="changeQuestion"
      />
      <UiInput
        :IsEmpty="false"
        PlaceHolder="End in..."
        @onChange="changeEndsAt"
        Type="datetime-local"
      />
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
