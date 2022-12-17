import { ValidatePassword } from "~~/server/utils/bcrypt";
import { GenerateToken } from "~~/server/utils/jwt";
import { getUserData } from "../../db/user";

export default defineEventHandler(async (event) => {
  const { userName, passWord } = await useBody(event);
  try {
    const user = await getUserData(userName);
    if (user) {
      const Validated = await ValidatePassword(passWord, user.passWord);
      if (Validated) {
        const token = GenerateToken(user.id, user.name);
        return {
          user,
          token,
        };
      }
      return sendError(
        event,
        createError({ statusCode: 401, statusMessage: "wrong password" })
      );
    }
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "user doesnt exist" })
    );
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "sth went wrong" })
    );
  }
});
