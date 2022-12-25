export default () => {
  const useAuthToken = () => useState<string>("auth_token");
  const setAuthToken = (newToken: string) => {
    useAuthToken().value = newToken;
    localStorage.setItem("token", newToken);
  };
  const getAuthToken = (): string => {
    return useAuthToken().value ?? localStorage.getItem("token");
  };

  const useAuthUser = () => useState<user>("auth_user");
  const setAuthUser = (newUser: user) => {
    useAuthUser().value = newUser;
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  const getAuthUser = (): user => {
    return useAuthUser().value ?? JSON.parse(localStorage.getItem("user"));
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
