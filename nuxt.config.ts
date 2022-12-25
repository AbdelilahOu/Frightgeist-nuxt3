// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/supabase"],
  components: true,
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    jwt_se: process.env.JWT_SE,
    supaBase_url: process.env.SUPABASE_URL,
    supaBase_key: process.env.SUPABASE_KEY,
  },
});
