// import useAuth from "~~/composables/useAuth";
import { RegisterUser, user, userStore } from "~~/types";
import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: (): userStore => {
    return {
      user: null,
    };
  },
  actions: {
    LogIn: async function (userName: string, passWord: string) {
      const { data } = await useFetch("/api/auth/login", {
        method: "POST",
        body: { userName, passWord },
      });
      if (data.value?.user) {
        const { setAuthToken, setAuthUser } = useAuth();
        const { user, token } = data.value;
        setAuthToken(token);
        setAuthUser(user);
        this.user = user;
        navigateTo("/question");
        return;
      }
      navigateTo("/auth/Register");
    },
    Register: async function (user: RegisterUser) {
      const { data } = await useFetch("/api/auth/register", {
        method: "POST",
        body: {
          ...user,
        },
      });
      if (data) {
        navigateTo("/auth/LogIn");
      }
    },
    PresisteAuth: async function () {
      const { getAuthUser, setAuthToken, setAuthUser } = useAuth();
      const User: user = getAuthUser();
      // setAuthToken("");
      // setAuthUser("");
      if (User) {
        this.user = User;
        navigateTo("/question");
        return;
      }
      navigateTo("/auth/LogIn");
    },
  },
});
