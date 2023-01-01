import { getAllVotesOfQuestion } from "~~/server/db/vote";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const { id } = event.context.params;
  try {
    const votes = await getAllVotesOfQuestion(Number(id));
    const votesCount = votes.reduce((acc, vote) => acc + vote._count._all, 0);
    votes.map((vote: any) => {
      vote["percent"] = Math.floor((vote._count._all / votesCount) * 100);
      delete vote._count;
    });
    return {
      votes,
    };
  } catch (error) {
    console.log(error);
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
