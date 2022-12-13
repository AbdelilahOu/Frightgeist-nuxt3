export default defineEventHandler(async (event) => {
  const { userName, passWord } = await useBody(event);
  console.log(userName, passWord);
});
