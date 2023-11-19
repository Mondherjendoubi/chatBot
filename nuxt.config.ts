import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  imports: {
    autoImport: true, // This should be true by default
    dirs: [
      // List directories here if you have custom directories with composables or components
    ],
  },
  server: {
    https: {
      key: "./myserver+3-key.pem",
      cert: "./myserver+3.pem",
    },
  },
  devServer: {
    https: {
      key: "./myserver+3-key.pem",
      cert: "./myserver+3.pem",
    },
  },
  modules: [
    "nuxt-directus",
    "@invictus.codes/nuxt-vuetify",
    "@kevinmarrec/nuxt-pwa",
  ],

});
