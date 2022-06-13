<template>
  <li class="counter">
    <header>
      <h3>{{ name }}</h3>
      <base-button @click="removeCounter">❌</base-button>
    </header>
    <main>
      <base-button @click="decrementCounter">➖</base-button>
      <span>{{ counter.count }}</span>
      <base-button @click="incrementCounter">➕</base-button>
    </main>
  </li>
</template>

<script>
import { useCounterStore } from "~~/stores/counter";
export default {
  name: "Counter",
  emits: ["remove-counter"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const counterStore = useCounterStore();
    return {
      counterStore,
      counter: counterStore.getCounterByName(props.name),
    };
  },
  methods: {
    incrementCounter() {
      if (this.counter.count >= 20) return;
      this.counterStore.increaseCounterByName(this.name);
    },
    decrementCounter() {
      if (this.counter.count <= 0) return;
      this.counterStore.decreaseCounterByName(this.name);
    },
    removeCounter() {
      this.$emit("remove-counter", { name: this.name });
    },
  },
};
</script>

<style lang="postcss">
.counter {
  @apply p-4 flex flex-col gap-4 max-w-max;
  @apply shadow-lg rounded-lg;
  & > header {
    @apply flex gap-4 justify-between;
    & > h3 {
      @apply text-lg font-bold;
    }
  }
  & > main {
    @apply flex gap-4 justify-between items-center;
    & > span {
      @apply text-xl;
    }
  }
}
</style>
