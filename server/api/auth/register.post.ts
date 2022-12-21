import { GenerateHash, GenerateSalt } from "~~/server/utils/bcrypt";
import { createUser } from "../../db/user";

export default defineEventHandler(async (event) => {
  // get user name, password and email from req.body
  const { userName: name, passWord, email } = await useBody(event);
  try {
    // generate hashed password
    const salt = await GenerateSalt();
    const HashPassword = await GenerateHash(passWord, salt);
    // create the new user
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
