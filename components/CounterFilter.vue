<template>
  <div class="counter-filter">
    <h3>Filtrar por valor</h3>
    <div class="min-max">
      <base-input
        class="min"
        placeholder="Mínimo"
        type="number"
        minLength="0"
        maxLength="20"
        v-model="minFilter"
      ></base-input>
      <base-input
        class="max"
        placeholder="Máximo"
        type="number"
        min-length="0"
        max-length="20"
        v-model="maxFilter"
      ></base-input>
      <base-button @click="updateFilter">➡️</base-button>
    </div>
    <ul class="filters">
      <li v-if="counterStore.getFilterRange[0] !== 0">
        Mayor o igual que {{ counterStore.getFilterRange[0] }}
        <base-button class="close" @click="resetMinFilter"> ❌ </base-button>
      </li>
      <li v-if="counterStore.getFilterRange[1] !== 20">
        Menor o igual que {{ counterStore.getFilterRange[1] }}
        <base-button class="close" @click="resetMaxFilter"> ❌ </base-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCounterStore } from "~~/stores/counter";

export default {
  name: "CounterFilter",
  data: () => ({
    minFilter: 0,
    maxFilter: 20,
  }),
  setup: () => {
    const counterStore = useCounterStore();
    const { updateFilters, resetMaxFilter, resetMinFilter } = counterStore;
    return {
      counterStore,
      updateFilters,
      resetMaxFilter,
      resetMinFilter,
    };
  },
  methods: {
    updateFilter() {
      if (!this.validRange) throw Error("Bad filter range");
      this.updateFilters(this.minFilter, this.maxFilter);
      console.log(this.minFilter, this.maxFilter);
    },
  },
  computed: {
    validRange() {
      return (
        this.minFilter <= this.maxFilter &&
        this.validMaxFilter &&
        this.validMinFilter
      );
    },
    validMinFilter() {
      return this.minFilter >= 0 && this.minFilter <= 20;
    },
    validMaxFilter() {
      return this.maxFilter >= 0 && this.maxFilter <= 20;
    },
  },
};
</script>

<style lang="postcss">
.counter-filter {
  & > h3 {
    @apply font-bold;
  }
  & > .min-max {
    @apply flex items-center gap-3;
    & > .min,
    & > .max {
      @apply max-w-[96px] max-h-8;
    }
    & > button {
      @apply w-10 h-10 grid place-items-center;
    }
  }

  & > .filters {
    @apply flex flex-col gap-2 my-2;
    & > li {
      @apply px-3 py-1.5 flex gap-2 items-center max-w-max;
      @apply bg-gray-200 rounded-xl;
      & > button {
        @apply w-9 h-9 rounded-full grid place-items-center;
      }
    }
  }
}
</style>
