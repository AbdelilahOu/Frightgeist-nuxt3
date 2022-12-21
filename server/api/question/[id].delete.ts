import { deleteQuestion } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  // get id from params
  const { id } = event.context.params;
  try {
    // delete the question
    const deleted = await deleteQuestion(id);
    return {
      deleted,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
