import useAuth from "../composables/useAuth";
import { defineStore } from "pinia";

const { setAuthToken, setAuthUser, getAuthUser, getAuthToken } = useAuth();

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
        this.user = data.value.user;
        setAuthToken(data.value.token);
        setAuthUser(data.value.user);
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
      const User: user = getAuthUser();
      console.log(User);
      if (User) {
        this.user = User;
        return;
      }
      navigateTo({ path: "/auth/LogIn" });
    },
  },
});

interface userStore {
  user: user | null;
}

interface user {
  id: number;
  name: string;
  email: string;
}

interface RegisterUser {
  userName: string;
  passWord: string;
  email: string;
}
