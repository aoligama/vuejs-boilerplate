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
        primary: '#0000FF',
        secondary: '#9D9DFF',
        tertiary: '#C4C4C4',
        success: '#2A9206',
        error: '#EE5253',
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
