import { getAllQuestions } from "../../db/question";

export default defineEventHandler(async (event) => {
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
