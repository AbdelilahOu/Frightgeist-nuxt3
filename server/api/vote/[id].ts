import { makeVote } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  const { id, voteFor } = event.context.params;
  try {
    const madeAvote = await makeVote(id, voteFor);
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
