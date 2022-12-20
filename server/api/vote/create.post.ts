import { createVote } from "~~/server/db/vote";

export default defineEventHandler(async (event) => {
  const { choice, voterName, questionId } = await useBody(event);
  try {
    const madeAvote = await createVote({ choice, voterName, questionId });
    if (madeAvote) {
      return {
        msg: "vote succeded",
      };
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth is wrong" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "catched err" })
    );
  }
});
