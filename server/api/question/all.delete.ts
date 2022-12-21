import { deleteAllQuestion } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  try {
    const questions = await deleteAllQuestion();
    return {
      questions,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
