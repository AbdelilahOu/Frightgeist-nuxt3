import { getUserData } from "../../db/user";

export default defineEventHandler(async (event) => {
  const { userName, passWord } = await useBody(event);
  try {
    const user = await getUserData(userName);
    if (user) {
      if (user.passWord == passWord) {
        return { user };
      }
      return sendError(
        event,
        createError({ statusCode: 401, statusMessage: "wrong password" })
      );
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "cant log in" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
