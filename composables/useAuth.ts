export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setAuthToken = (newToken: string) => (useAuthToken().value = newToken);

  const setAuthUser = (newUser: any) => (useAuthUser().value = newUser);

  const getAuthToken = () => useAuthToken().value;
  const getAuthUser = () => useAuthUser().value;

  return {
    getAuthToken,
    getAuthUser,
    setAuthToken,
    setAuthUser,
  };
};
