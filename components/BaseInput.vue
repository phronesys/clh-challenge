<template>
  <input v-model="value" @keyup="$emit('value-change', value)" />
</template>

<script>
export default {
  name: "BaseInput",
  emits: ["value-change"],
  data: () => ({
    value: "",
  }),
};
</script>

<style lang="postcss" scoped>
input {
  @apply px-4 py-2;
  @apply bg-white border border-gray-500 rounded-xl;
}
</style>
