import { defineStore } from "pinia";

export const useQuestion = defineStore("Question", {
  state: (): questionState => {
    return {
      Questions: [],
    };
  },
  actions: {
    getActiveQuestions: async function () {
      const data: any = await useOurFetch("/api/question/active", {
        method: "POST",
      });
      this.Questions = data.activeQuestions;
    },
  },
});

interface question {
  createdAt: string;
  endsAt: string;
  id: number;
  options: any;
  title: string;
  userId: number;
}

interface questionState {
  Questions: question[];
}
