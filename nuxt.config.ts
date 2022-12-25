// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: true,
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    jwt_se: "mhsdfjmhdsmofuhfbmkjxbcnnap",
    supaBase_url: process.env.SUPABASE_URL,
    supaBase_key: process.env.SUPABASE_KEY,
  },
});
