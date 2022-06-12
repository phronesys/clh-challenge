<template>
  <div class="app">
    <div class="flex flex-col gap-4">
      <counter-filter></counter-filter>
      <counter-sort></counter-sort>
    </div>
    <counter-list> </counter-list>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="postcss">
.app {
  @apply flex flex-wrap justify-center gap-8 p-8;
}
</style>
