import { H3Event } from "h3";
import { findVote } from "~~/server/db/vote";
export default defineEventHandler(async (event: H3Event) => {
  const { voterName, questionId } = await readBody(event);
  try {
    const vote = await findVote(voterName, Number(questionId));
    return {
      vote,
    };
  } catch (error) {
    console.log(error);
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
