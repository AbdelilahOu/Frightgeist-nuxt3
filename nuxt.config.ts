// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "trpc-nuxt/module"],
  components: true,
  typescript: {
    strict: true,
  },
  runtimeConfig: {},
});
