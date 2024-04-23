// https://nuxt.com/docs/api/configuration/nuxt-config

const appScripts: any = [];

export default defineNuxtConfig({
  css: ["~/assets/css/globals.css"],
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
  ],
  app: {
    head: {
      title: "earthworm",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
      script: appScripts,
    },
  },
  imports: {
    autoImport: false,
  },
});
