<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModal } from "~~/stores/ModalStore";
import { useQuestion } from "~~/stores/QuestionStore";

useMeta({
  title: "Questions",
});

const QuestionStore = useQuestion();
const { Questions } = storeToRefs(QuestionStore);

const showCreateModal = () => useModal().toggleModal(true);

onBeforeMount(async () => {
  QuestionStore.getActiveQuestions();
});
</script>
<template>
  <section class="w-full h-full pb-14">
    <div
      class="flex flex-col md:flex-row md:items-start place-items-center gap-2 h-full p-2 w-full"
    >
      <LiveVotes
        v-for="(item, index) in Questions"
        :key="index"
        :Id="item.id"
        :Title="item.title"
        :Ends="item.endsAt"
      />
    </div>
    <div class="flex items-center fixed bottom-2 justify-center h-fit w-full">
      <UiButton @onClick="showCreateModal"> Create Question </UiButton>
    </div>
  </section>
</template>
