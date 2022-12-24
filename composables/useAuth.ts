export default () => {
  const useAuthToken = () => useState<string>("auth_token");
  const setAuthToken = (newToken: string) => (useAuthToken().value = newToken);
  const getAuthToken = (): string => useAuthToken().value;

  const useAuthUser = () => useState<user>("auth_user");
  const setAuthUser = (newUser: user) => (useAuthUser().value = newUser);
  const getAuthUser = (): user => useAuthUser().value;

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
