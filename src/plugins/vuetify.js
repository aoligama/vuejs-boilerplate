import Vue from 'vue'
import Vuetify, { VTextField } from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'
import pt from 'vuetify/lib/locale/pt'
import en from 'vuetify/lib/locale/en'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ee5253',
        secondary: '#5f27cd',
        tertiary: '#c8d6e5',
        success: '#10ac84',
        error: '#ff6b6b',
        accent: '#FBFBFB',
        warning: '#FF9F43',
      },
    },
  },
  lang: {
    locales: { en, pt },
    current: 'pt',
  },
  components: {
    VTextField,
  },
})
