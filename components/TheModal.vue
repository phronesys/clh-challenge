<template>
  <div class="modal" @click.self="closeModal">
    <div class="content">
      <h1>Create new counter</h1>
      <base-input
        placeholder="Counter name"
        @value-change="updateName"
      ></base-input>
      <div class="buttons">
        <base-button @click="closeModal">Cancelar</base-button>
        <base-button @click="addCounter">Aceptar</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "~~/stores/counter";
export default {
  name: "TheModal",
  emits: ["close-modal"],
  data: () => ({
    name: "",
  }),
  setup: () => {
    const { addCounterToList } = useCounterStore();
    return { addCounterToList };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    addCounter() {
      if (this.name.length <= 0 || this.name.length > 20) return;
      this.addCounterToList(this.name);
      this.closeModal();
    },
    updateName(value) {
      this.name = value;
    },
  },
};
</script>

<style lang="postcss">
.modal {
  @apply absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center;
  @apply bg-gray-800/75;
  & > .content {
    @apply p-4 flex flex-col gap-4 absolute translate-y-1/2 -translate-x-1/2 left-1/2  bottom-1/2;
    @apply bg-white shadow-xl rounded-xl;
    & > h1 {
      @apply text-xl;
    }
    & > .buttons {
      @apply flex gap-4 justify-end;
    }
  }
}
</style>
