import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';



Vue.config.productionTip = false;


Vue.component('Nav', Nav); //全局引入Nav  按Tab键即可直接引入
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);



new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
