<template>
  <button>
    <slot />
  </button>
</template>
<script>

export default {
  name: "BaseButton",
};
</script>

<style lang="postcss" scoped>
button {
  @apply px-2 py-1 bg-gray-600 text-white select-none rounded-xl;
  @apply hover:bg-gray-500 active:bg-gray-700;
}
</style>
