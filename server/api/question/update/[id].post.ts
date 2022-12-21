import { updateQuestion } from "~~/server/db/question";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const updateQuestion = await useBody(event);
  try {
    const updated = await updateQuestion(id, updateQuestion);
    return { updated };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
