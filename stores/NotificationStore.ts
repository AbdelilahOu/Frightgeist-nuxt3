import { defineStore } from "pinia";

export const useNotifications = defineStore("Notifications", {
  state: (): Notifications => {
    return {
      Notification: "",
      Queue: [],
    };
  },
  actions: {
    updateSingle: function (newText: string) {
      this.Notification = newText;
      setTimeout(() => {
        this.Notification = "";
      }, 2000);
    },
    deleteQueue: function (id: number) {
      this.Queue.splice(id, 1);
    },
    insertQueue: function (id: number, text: string) {
      this.Queue.push({
        text,
        id,
      });
    },
  },
});

interface Notifications {
  Notification: string;
  Queue: { id: number; text: string }[];
}
