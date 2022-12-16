import { getUserData } from "../../utils/user-repo";

export default defineEventHandler(async (event) => {
  const { userName, passWord } = await useBody(event);
  const user = await getUserData(userName);
  if (user) {
    if (user.passWord == passWord) {
      return { user };
    }
    return {
      msg: "",
    };
  }
  return {
    msg: "user doesnt exists",
  };
});
