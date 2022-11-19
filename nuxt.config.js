export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n-edge'],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
      },
    ],
    vueI18n: {
      legacy: false,
    },
  },
});
