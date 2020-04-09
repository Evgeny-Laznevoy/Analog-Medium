import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'material-design-icons-iconfont'
import { setupBus } from './bus'


Vue.use(Buefy)


Vue.config.productionTip = false

setupBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
