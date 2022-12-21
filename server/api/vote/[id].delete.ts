import { deleteVote } from "~~/server/db/vote";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  try {
    const vote = await deleteVote(id);
    return {
      vote,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
