import { user } from "~~/types";
export default () => {
  //
  const tokenCookie = useCookie<string>("authToken", {
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  //
  const userCookie = useCookie<user>("authUser", {
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  //
  const setAuthToken = (newToken: string) => (tokenCookie.value = newToken);
  const getAuthToken = (): string => tokenCookie.value;
  const setAuthUser = (newUser: user) => (userCookie.value = newUser);
  const getAuthUser = (): user => userCookie.value;
  return {
    getAuthToken,
    setAuthToken,
    getAuthUser,
    setAuthUser,
  };
};
