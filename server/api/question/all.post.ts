import { getAllQuestions } from "../../db/question";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  try {
    const AllQuestions = await getAllQuestions();
    if (AllQuestions) {
      return {
        AllQuestions,
      };
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant get question" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant create question" })
    );
  }
});
