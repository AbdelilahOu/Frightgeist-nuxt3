import { defineStore } from "pinia";
import useQuestionCookie from "~~/composables/useQuestionCookie";

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
    pickChosenQuestion: async function (id: number) {
      const QuestionExists = this.Questions?.find(
        (question) => question.id === id
      );

      if (QuestionExists) {
        this.ChosenQuestion = QuestionExists;
        return;
      }
      const res: any = await useOurFetch(`/api/question/${id}`, {
        method: "GET",
      });
      this.ChosenQuestion = res.question;
    },
    getChosenQuestionVotes: async function (id: number) {
      const res: any = await useOurFetch(`/api/vote/${id}`, {
        method: "POST",
      });
      this.ChosenQuestionVotes = res.votes;
    },
    createVote: async function (choice: string, id: number, voterName: string) {
      const { setVoteCookie, isAlreaddyVoted } = useQuestionCookie();
      if (!isAlreaddyVoted(id)) {
        const res: any = await useOurFetch("/api/vote/create", {
          method: "POST",
          body: {
            choice,
            voterName,
            questionId: id,
          },
        });
        if (res) {
          setVoteCookie(id);
        }
        return;
      }
      // Notify
      console.log("already voted");
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
  choice: string;
  _count: {
    _all: number;
  };
}

interface questionState {
  Questions: question[] | null;
  ChosenQuestion: question | null;
  ChosenQuestionVotes: vote[] | null;
}
