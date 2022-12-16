import { createQuestion } from "../db/question";

export default defineEventHandler(async (event) => {
  const { question } = await useBody(event);
  try {
    const createdQuestion = await createQuestion(question);
  } catch (error) {
    return {
      err: error,
    };
  }
});
