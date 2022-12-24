export default (url: string, options: optionsType) => {
  return $fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

interface optionsType {
  method?: string;
  body?: any;
}
