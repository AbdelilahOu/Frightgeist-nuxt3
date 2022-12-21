import { getCurrentQuestions } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  try {
    const activeQuestion = await getCurrentQuestions();
    return {
      activeQuestion,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
