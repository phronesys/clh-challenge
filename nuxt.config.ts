import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: false,
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['assets/css/base.css']
});
