export default (url: string, options: optionsType) => {
  const { getAuthToken } = useAuth();
  const token = getAuthToken();
  return $fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

interface optionsType {
  method: string;
  body?: any;
}
