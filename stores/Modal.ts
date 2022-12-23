import { defineStore } from "pinia";

export const useModal = defineStore("Modal", {
  state: () => {
    return {
      IsModal: false,
    };
  },
  actions: {
    toggleModal: function (value: boolean) {
      this.IsModal = value;
    },
  },
});
