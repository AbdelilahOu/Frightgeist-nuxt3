import useQuestionCookie from "~~/composables/useQuestionCookie";

export default defineNuxtRouteMiddleware((to, from) => {
  const { getQuestionCookie } = useQuestionCookie();
  if (from.name == "question-id" && to.name == "question") {
    // user could create a question and some how manages to get into
    // other live question so we dont wanna keep him there
    // so we only force him to stay in the question he created
    const questionId = Number(from.params.id);
    if (getQuestionCookie() == questionId) {
      console.log("cant leave");
      return abortNavigation();
    }
  }
});
