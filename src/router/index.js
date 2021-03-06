import Vue from 'vue';
import Router from 'vue-router';
import Config from '../config/category';

Vue.use(Router);

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
// const ItemView = () => import('../views/ItemView.vue');
// const UserView = () => import('../views/UserView.vue')

const routes = Config.map(config => ({
    path: `/${config.title}`,
    component: createListView(config.title)
}));
routes.push(
    { path: '/', redirect: routes[0].path }
);
export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: routes
    });
}
