import { defineStore } from "pinia";
import { question } from "../composables/useTypes";

export const useQuestion = defineStore("Question", {
  state: () => {
    return {
      Questions: [],
    };
  },
  actions: {
    getActiveQuestions: async function () {
      const data: question = await useOurFetch("/api/question/active", {
        method: "POST",
      });
    },
  },
});
