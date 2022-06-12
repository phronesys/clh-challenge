<template>
  <!-- 
  debí usar vue 3 en vez de nuxt, ya que para 
  acceder al window (storages) necesito que la
  app sea client only... para no re hacer la app
  usaré el componente de nuxt para renderizar
  sólo en el cliente
  -->
  <client-only>
    <div class="app">
      <div class="flex flex-col gap-4">
        <counter-filter></counter-filter>
        <counter-sort></counter-sort>
      </div>
      <counter-list> </counter-list>
    </div>
  </client-only>
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
