import { defineStore } from "pinia";

export const useNotifications = defineStore("Notifications", {
  state: (): Notifications => {
    return {
      Notification: "",
    };
  },
  actions: {
    updateSingle: function (newText: string) {
      this.Notification = newText;
      setTimeout(() => {
        this.Notification = "";
      }, 2000);
    },
  },
});

interface Notifications {
  Notification: string;
}
