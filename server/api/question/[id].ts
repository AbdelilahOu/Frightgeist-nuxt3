export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  return {
    id,
  };
});
