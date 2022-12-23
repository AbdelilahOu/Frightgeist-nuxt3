import { createQuestion } from "../../db/question";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const { question } = await useBody(event);
  try {
    const createdQuestion = await createQuestion(question);

    if (createdQuestion) {
      return {
        createdQuestion,
      };
    }

    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant create question" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant create question" })
    );
  }
});
