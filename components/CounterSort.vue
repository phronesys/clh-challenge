<template>
  <div class="counter-sort">
    <h3>Ordenar por</h3>
    <div class="select">
      <base-button @click="openSelect">
        {{ sortType[counterStore.sortTypeIndex] }}
      </base-button>
      <ul class="list" v-if="select">
        <li
          v-for="(type, index) in sortType"
          :key="type"
          @click="setTypeIndex(index)"
          :class="index === counterStore.sortTypeIndex ? 'selected' : ''"
        >
          {{ type }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "~~/stores/counter";
export default {
  name: "CounterSort",
  data: () => ({
    select: false,
    sortType: ["Nombre ⬆️", "Nombre ⬇️", "Contador ⬆️", "Contador ⬇️"],
  }),
  setup: () => {
    const counterStore = useCounterStore();
    const { setSortTypeIndex } = counterStore;
    return { counterStore, setSortTypeIndex };
  },
  methods: {
    openSelect() {
      this.select = !this.select;
    },
    setTypeIndex(index) {
      this.setSortTypeIndex(index);
      this.select = false; // close select
    },
  },
};
</script>

<style lang="postcss">
.counter-sort {
  @apply flex items-start gap-4;
  & > h3 {
    @apply font-bold;
  }

  & > .select .list {
    @apply shadow-lg rounded-lg mt-2 overflow-hidden;
    & > li {
      @apply px-4 py-2;
      @apply hover:bg-gray-100 cursor-pointer;
      &.selected {
        @apply bg-gray-200;
      }
    }
  }
}
</style>
