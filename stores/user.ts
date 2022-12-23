import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: (): userStore => {
    return {
      user: null,
    };
  },
  actions: {},
});

interface userStore {
  user: user | null;
}

interface user {
  id: number;
  name: string;
  email: string;
}
