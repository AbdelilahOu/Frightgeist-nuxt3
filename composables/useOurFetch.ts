export default (url: string, options: optionsType) => {
  const token = localStorage.getItem("token");
  return $fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

interface optionsType {
  method?: string;
  body?: any;
}
