// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: true,
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      supaBase_url: process.env.SUPABASE_URL,
      supaBase_key: process.env.SUPABASE_KEY,
    },
    jwt_se: process.env.JWT_SE,
  },
});
