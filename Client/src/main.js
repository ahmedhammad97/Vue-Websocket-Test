import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';

// Static host for testing
// Use 'window.location.host'
Vue.use(new VueSocketIO({connection: `http://localhost:5000`}))
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
