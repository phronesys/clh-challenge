import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counterList: [
        {
          name: "Primero",
          count: 0,
        },
        {
          name: "Segundo",
          count: 2,
        },
      ],
      sortTypeIndex: 0,
      filterRange: [],
    };
  },
  getters: {
    getCounterList: (state) => state.counterList,
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
