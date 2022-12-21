import { getQuestion } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  try {
    const question = await getQuestion(id);
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
