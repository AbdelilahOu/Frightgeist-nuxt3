import { GenerateHash, GenerateSalt } from "~~/server/utils/bcrypt";
import { createUser } from "../../db/user";

export default defineEventHandler(async (event) => {
  const { userName: name, passWord, email } = await useBody(event);
  // user name and password
  try {
    const salt = await GenerateSalt();
    const HashPassword = await GenerateHash(passWord, salt);
    const user = await createUser({ name, password: HashPassword, email });
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
