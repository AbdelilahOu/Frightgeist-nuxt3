import { createQuestion } from "../../db/question";

export default defineEventHandler(async (event) => {
  const { question } = await useBody(event);
  try {
    const createdQuestion = await createQuestion(question);
    if (createdQuestion) {
      return {
        msg: "creation is done",
      };
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant create question" })
    );
  } catch (error) {
    return {
      err: error,
    };
  }
});
