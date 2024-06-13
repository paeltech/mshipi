// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxthub/core"],
  hub: {
    analytics: false,
    blob: true,
    database: true,
  },
  $development: {
    hub: {
      remote: true,
    },
  },
});
