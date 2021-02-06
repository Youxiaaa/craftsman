import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import DollarsignFilter from './components/DollarsignFilter'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueCarousel from 'vue-carousel'
import VueNoty from 'vuejs-noty'
import './bus'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCarousel)
Vue.use(VueNoty, {
  timeout: 1000,
  progressBar: true,
  layout: 'topRight'
})

Vue.filter('DollarsignFilter', DollarsignFilter)

Vue.component('Loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('zh_TW', TW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

extend('min', {
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: '長度不夠'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((res) => {
      if (res.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
