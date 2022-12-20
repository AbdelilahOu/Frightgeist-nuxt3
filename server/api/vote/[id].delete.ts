export default defineEventHandler((event) => {
  try {
    return {};
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
