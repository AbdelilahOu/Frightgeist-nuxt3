export default () => {
  const tokenCookie = useCookie<string>("authToken", {
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  const setAuthToken = (newToken: string) => {
    tokenCookie.value = newToken;
  };
  const getAuthToken = (): string => {
    return tokenCookie.value;
  };
  const userCookie = useCookie<user>("authUser", {
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  const setAuthUser = (newUser: user) => {
    userCookie.value = newUser;
  };
  const getAuthUser = (): user => {
    return userCookie.value;
  };
  return {
    getAuthToken,
    setAuthToken,
    getAuthUser,
    setAuthUser,
  };
};

interface user {
  id: number;
  name: string;
  email: string;
}
