import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './assets/styles/styles.scss'

Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  render: h => h(App),
}).$mount('#app')

