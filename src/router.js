import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import Home from './views/Home.vue';
import Render from './views/Render.vue';
import Class from './views/Class.vue';
import Form from './views/Form.vue';
import Test from './views/Test.vue';
import Slot from './views/Slot.vue';
import Mixins from './views/Mixins.vue';
import RouterView from './views/Router.vue';
import RouterForm from './views/RouterForm.vue';
import Dynamic from './views/Dynamic.vue';
import Component from './views/Component.vue';
import Echarts from './views/Echarts.vue';
// progress bar style
NProgress.configure({ showSpinner: true });
Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/echarts',
            name: 'echarts',
            component: Echarts,
        },
        {
            path: '/router/:id',
            name: 'router',
            component: RouterView,
            children: [{
                path: 'form/:name',
                name: 'routerForm',
                components: { default: RouterForm },
            }],
        },
        {
            path: '/mixins',
            name: 'mixins',
            component: Mixins,
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: Dynamic,
        },
        {
            title: 'slot',
            path: '/slot',
            name: 'slot',
            component: Slot,
        },
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/event-bus',
            name: 'event-bus',
            component: Test,
        },
        {
            path: '/demo/render',
            name: 'render',
            component: Render,
        },
        {
            path: '/demo/class',
            name: 'class',
            component: Class,
        },
        {
            path: '/demo/form',
            name: 'form',
            component: Form,
        },
        {
            path: '/demo/component',
            name: 'component',
            component: Component,
        },
    ],
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done();
});
export default router;
