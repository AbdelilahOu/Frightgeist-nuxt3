import { getCurrentQuestions } from "~~/server/db/question";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
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
