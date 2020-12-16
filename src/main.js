import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import Auth from './components/Auth.vue'
import Body from './components/Body.vue'
import en from './assets/locales/en'
import zh from './assets/locales/zh'

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)

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

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Body,
    },
    {
      path: '/auth',
      component: Auth,
      props: route => ({ code: route.query.code })
    }
  ]
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

