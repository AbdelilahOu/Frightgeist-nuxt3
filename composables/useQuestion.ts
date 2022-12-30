export default () => {
  const voteCookie = useCookie<number>("vote", {
    expires: new Date(new Date().getTime() + 60 * 1000),
  });
  // set the on voted question
  const setVoteCookie = (id: number) => (voteCookie.value = id);
  //   check if we voted on a spesific question
  const isAlreaddyVoted = (id: number) => voteCookie.value == id;
  //
  return {
    setVoteCookie,
    isAlreaddyVoted,
  };
};
