<template>
  <div class="counter-list">
    <header>
      <base-button class="ml-auto" @click="openModal">
        Crear contador
      </base-button>
    </header>

    <ul>
      <the-counter
        v-for="counter in counterStore.getCounterList"
        :key="counter.name"
        :name="counter.name"
        @remove-counter="deleteCounter"
      ></the-counter>
    </ul>

    <footer>
      <h1>Total sum of counters: {{ counterStore.getTotalSumOfCounters }}</h1>
    </footer>
    <!-- modal for counter creation -->
    <teleport to="body">
      <the-modal v-if="modal" @close-modal="closeModal"></the-modal>
    </teleport>
  </div>
</template>

<script>
import { useCounterStore } from "~~/stores/counter";
export default {
  name: "CounterList",
  data: () => ({
    modal: false,
  }),
  setup: () => {
    const counterStore = useCounterStore();
    const { deleteCounter } = counterStore;
    return {
      counterStore,
      deleteCounter,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style lang="postcss">
.counter-list {
  @apply flex flex-col justify-start max-w-sm max-h-[600px];
  & > header {
    @apply p-4 flex justify-between;
    & > h1 {
      @apply text-xl;
    }
  }
  & > ul {
    @apply p-4 flex flex-col gap-4 items-start overflow-y-auto;
  }
  & > footer h1 {
    @apply py-4 text-xl;
  }
}
</style>
