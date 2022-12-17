import { createUser } from "../../db/user";

export default defineEventHandler(async (event) => {
  const { userName, passWord, email } = await useBody(event);
  // user name and password
  try {
    const user = await createUser({ userName, passWord, email });

    return {
      user,
    };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
