import { updateVote } from "~~/server/db/vote";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const { choice } = await useBody(event);
  try {
    if (choice) {
      const vote = await updateVote(choice, id);
      return {
        vote,
      };
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "provide a choice" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
