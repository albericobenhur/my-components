// import { aliases, mdi } from 'vuetify/iconsets/mdi'

const theTheme = {
  dark: false,
  colors: {
    background: '#1e293b',
    surface: '#FFFFFF',
    primary: '#fe682d',
    'primary-darken-1': '#3700B3',
    secondary: '#00a3d7',
    'secondary-darken-1': '#018786',
    error: '#fe682d',
    info: '#2196F3',
    success: '#01b9e0',
    warning: '#fea800',
  },
}

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'theTheme',
        themes: {
          theTheme,
        },
      },
      defaults: {
        VCard: {
          rounded: 'md',
        },
        VTextField: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary',
        },
        VTextarea: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary',
        },
        VSelect: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary',
        },
        VListItem: {
          minHeight: '45px',
        },
        VTooltip: {
          location: 'top',
        },
      },
      // icons: {
      //   defaultSet: 'mdi',
      //   aliases,
      //   sets: {
      //     mdi,
      //   },
      // },
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: 'sass',
      autoImport: true,
    },
  },
  app: {
    head: {
      titleTemplate: 'Meus Componentes',
      title: 'componentes',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Componentes' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests',
        },
      ],
    },
  },
  nitro: {
    serveStatic: true,
    compressPublicAssets: true,
  },
 
  imports: {
    dirs: ['composables/**'],
  },
})
