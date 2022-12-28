import { defineStore } from "pinia";

export const useQuestion = defineStore("Question", {
  state: (): questionState => {
    return {
      Questions: null,
      ChosenQuestion: null,
      ChosenQuestionVotes: null,
    };
  },
  actions: {
    getActiveQuestions: async function () {
      const data: any = await useOurFetch("/api/question/active", {
        method: "POST",
      });
      console.log(data);

      this.Questions = data.activeQuestions;
    },
    pickChosenQuestion: function (id: number) {
      this.ChosenQuestion =
        this.Questions?.find((question) => question.id === id) ?? null;
    },
    getChosenQuestionVotes: async function (id: number) {
      const res: any = await useOurFetch(`api/vote/${id}`, {
        method: "POST",
      });
      this.ChosenQuestionVotes = res.votes;
    },
    createVote: async function (choice: string, id: number, voterName: string) {
      const res: any = await useOurFetch("api/vote/create", {
        method: "POST",
        body: {
          choice,
          voterName,
          questionId: id,
        },
      });
      console.log(res);
      if (res) {
        //
        console.log(res);
      }
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
  resultId: number;
}

interface vote {
  id: number;
  createdAt: string;
  choice: string;
  voterName: string;
  questionId: number;
}

interface questionState {
  Questions: question[] | null;
  ChosenQuestion: question | null;
  ChosenQuestionVotes: vote[] | null;
}
