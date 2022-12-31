import { defineStore } from "pinia";

export const useNotifications = defineStore("Notifications", {
  state: (): { Notification: string } => {
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
