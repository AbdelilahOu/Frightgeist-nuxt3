import { createVote } from "~~/server/db/vote";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const { choice, voterName, questionId, voteId } = await useBody(event);
  try {
    const madeAvote = await createVote({
      questionId,
      voterName,
      choice,
      voteId,
    });
    if (madeAvote) {
      return {
        madeAvote,
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
