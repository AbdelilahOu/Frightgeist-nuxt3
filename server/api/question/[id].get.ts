import { getQuestion } from "~~/server/db/question";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const { id } = event.context.params;
  try {
    const question = await getQuestion(Number(id));
    return {
      question,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
