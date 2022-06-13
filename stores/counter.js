import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counterList: useLocalStorage("counterList", []),
      sortTypeIndex: useSessionStorage("sortTypeIndex", 0),
      filterRange: useSessionStorage("filterRange", [0, 20]),
    };
  },
  getters: {
    getCounterList: (state) => {
      // apply filters
      let counterList = state.counterList.filter(
        (counter) =>
          counter.count >= state.filterRange[0] &&
          counter.count <= state.filterRange[1]
      );

      // sort by
      switch (state.sortTypeIndex) {
        case 0:
          // name ascendente
          counterList.sort((a, b) => a.name - b.name);
          break;
        case 1:
          // name descendente
          counterList.sort((a, b) => b.name - a.name);
          break;
        case 2:
          // counter ascendente
          counterList.sort((a, b) => a.count - b.count);
          break;
        case 3:
          // counter descendente
          counterList.sort((a, b) => b.count - a.count);
          break;
        default:
          break;
      }

      return counterList;
    },
    getTotalSumOfCounters: (state) => {
      return state.counterList.reduce((acc, counter) => acc + counter.count, 0);
    },
    getCounterByName: (state) => {
      return (name) =>
        state.counterList.find((counter) => counter.name === name);
    },
    getFilterRange: (state) => state.filterRange,
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
    resetMaxFilter() {
      const [min, max] = this.filterRange;
      this.filterRange = [min, 20];
    },
    resetMinFilter() {
      const [min, max] = this.filterRange;
      this.filterRange = [0, max];
    },
    updateFilters(min, max) {
      this.filterRange = [Number(min), Number(max)];
    },
  },
});
