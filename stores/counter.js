import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counterList: useLocalStorage("counterList", []),
      sortTypeIndex: useSessionStorage("sortTypeIndex", 0),
      filterRange: useSessionStorage("filterRange", []),
    };
  },
  getters: {
    getCounterList: (state) => {
      if (state.filterRange.length) {
        console.log("filtros funcionan");
      }
      return state.counterList;
    },
    getTotalSumOfCounters: (state) => {
      return state.counterList.reduce((acc, val) => acc + val.count, 0);
    },
    getCounterByName: (state) => {
      return (name) =>
        state.counterList.find((counter) => counter.name === name);
    },
  },
  actions: {
    addCounterToList(name) {
      if (this.counterList.length >= 20) return;
      this.counterList.push({ name, count: 0 });
    },
    deleteCounter({ name }) {
      this.counterList = [
        ...this.counterList.filter((counter) => counter.name !== name),
      ];
    },
    increaseCounterByName(name) {
      this.getCounterByName(name).count++;
    },
    decreaseCounterByName(name) {
      this.getCounterByName(name).count--;
    },
  },
});
