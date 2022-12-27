import { deleteVote, getAllVotesOfQuestion } from "~~/server/db/vote";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const { id } = event.context.params;
  try {
    const votes = await getAllVotesOfQuestion(id);
    return {
      votes,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
