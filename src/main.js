import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import en from './assets/locales/en'
import zh from './assets/locales/zh'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

VueI18n.install(Vue)

const i18n = new VueI18n({
  locale: navigator.language,
  messages: {
    en,
    zh,
    'en-US': en,
    'zh-CN': zh
  },
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

