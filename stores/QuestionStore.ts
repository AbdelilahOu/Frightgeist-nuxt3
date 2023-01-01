import { defineStore } from "pinia";
import useQuestionCookie from "~~/composables/useQuestionCookie";
import { useNotifications } from "~~/stores/NotificationStore";
import { questionState } from "~~/types";

export const useQuestion = defineStore("Question", {
  state: (): questionState => {
    return {
      Questions: null,
      ChosenQuestion: null,
      ChosenQuestionVotes: null,
      MadeVote: null,
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
        const { timerSecond } = useTimer();
        // theres still time to vote
        if (!this.ChosenQuestion?.endsAt) {
          return;
        }
        // add voteId bcz chnaged create vote to upsert vote
        // which means if there no record that matches id == voteId its will create new record
        // if there is it will update the exisstign one
        // so in case we dont have a vote id we give it id == 0 and we all know
        // sql rows dont start with 0
        const { endsAt } = this.ChosenQuestion;
        if (timerSecond(new Date(endsAt).getTime())) {
          const res: any = await useOurFetch("/api/vote/create", {
            method: "POST",
            body: {
              choice,
              voterName,
              questionId: id,
              voteId: this.MadeVote?.id ?? 0,
            },
          });
          if (res) {
            this.MadeVote = res.madeAvote;
            setVoteCookie(res.madeAvote);
          }
          return;
        }
        useNotifications().updateSingle("sth is wrong");
        return;
      }
      // Notify
      useNotifications().updateSingle("You have already voted");
    },
    getCreatedVote: async function (voterName: string, questionId: number) {
      const res: any = await useOurFetch("/api/vote/created", {
        method: "POST",
        body: {
          voterName,
          questionId,
        },
      });
      this.MadeVote = res.vote;
    },
  },
});
