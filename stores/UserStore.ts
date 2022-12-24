import { defineStore } from "pinia";
const tokenState = useState("token");

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
        tokenState.value = data.value.token;
        navigateTo("/votes");
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
      navigateTo("/auth/LogIn");
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
