import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuescrollto from 'vue-scrollto'
import Countdown from 'countdown-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.component('countdown', Countdown)

Vue.use(Vuescrollto)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({
      duration: 1200
    })
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
