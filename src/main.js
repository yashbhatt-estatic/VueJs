import Vue from 'vue'
import App from './App.vue'
import router from './router'

import CxltToastr from 'cxlt-vue2-toastr'

var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}

Vue.config.productionTip = false

Vue.use(CxltToastr, toastrConfigs)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
