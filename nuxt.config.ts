// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  colorMode: {
    preference: "light", // default value of $colorMode.preference
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  css: [
    "~/assets/css/styles.css",
  ],
});
