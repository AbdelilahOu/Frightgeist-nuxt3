import { GenerateHash, GenerateSalt } from "~~/server/utils/bcrypt";
import { createUser } from "../../db/user";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  // get user name, password and email from req.body
  const { userName: name, passWord, email } = await readBody(event);
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
