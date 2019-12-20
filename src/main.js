import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import '@/thingjs/Video';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
window.$eventBus = new Vue();
const data = { name: 'main.name' };
window.vm = new Vue({
    data,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
