import { deleteQuestion } from "~~/server/db/question";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
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
