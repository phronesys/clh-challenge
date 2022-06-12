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
        @value-change="updateMin"
      ></base-input>
      <span class="spacer"></span>
      <base-input
        class="max"
        placeholder="Máximo"
        type="number"
        min-length="0"
        max-length="20"
        @value-change="updateMax"
      ></base-input>
      <base-button @click="updateFilter">🤣</base-button>
    </div>
    <ul class="filters">
      <li>
        Menor que {{ filterRange[0] }}
        <base-button class="close">x</base-button>
      </li>
      <li>
        Mayor que {{ filterRange[1] }}
        <base-button class="close">x</base-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CounterFilter",
  data: () => ({
    filterRange: [0, 20],
  }),
  methods: {
    updateMin(value) {
      if (!value) return;
      const [min, max] = this.filterRange;
      this.filterRange = [Number(value), max];
    },
    updateMax(value) {
      if (!value) return;
      const [min, max] = this.filterRange;
      this.filterRange = [min, Number(value)];
    },
    updateFilter() {
      console.log(this.filterRange);
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
    & > .spacer {
      @apply bg-gray-500 w-5 h-3;
    }
    & > button {
      @apply w-10 h-10 grid place-items-center;
    }
  }

  & > .filters {
    @apply flex flex-col gap-2 my-2;
    & > li {
      @apply px-3 py-1.5 flex gap-2 items-center max-w-max;
      @apply bg-gray-200;
      & > button {
        @apply w-8 h-8 rounded-full grid place-items-center;
      }
    }
  }
}
</style>
