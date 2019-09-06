import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/element';
import './plugins/layer';

Vue.use(ElementUI);
Vue.config.productionTip = false;
window.$eventBus = new Vue();
const data = { name: 'main.name' };
window.vm = new Vue({
    data,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
