import { createUser } from "../../db/user";

export default defineEventHandler(async (event) => {
  const { userName, passWord, email } = await useBody(event);
  // user name and password
  const user = await createUser({ userName, passWord, email });

  return {
    user,
  };
});
