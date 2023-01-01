import { Vote } from "~~/types";
export default (minutes: number = 0) => {
  const voteCookie = useCookie<Vote>("vote", {
    expires: new Date(new Date().getTime() + 60 * 1000),
  });
  // we set the cookie expire date to life span of the created question
  const questionCookie = useCookie<number>("question", {
    expires: new Date(new Date().getTime() + minutes * 60 * 1000),
  });
  // set the on voted question
  const setVoteCookie = (vote: Vote) => (voteCookie.value = vote);
  //   check if we voted on a spesific question
  const isAlreaddyVoted = (id: number) => voteCookie.value.questionId === id;
  //
  const setQuestionCookie = (id: number) => (questionCookie.value = id);
  const getQuestionCookie = () => questionCookie.value;
  return {
    setVoteCookie,
    isAlreaddyVoted,
    setQuestionCookie,
    getQuestionCookie,
  };
};
