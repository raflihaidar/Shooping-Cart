
import store from './Store'
require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('parent-component', require('./components/parentComponent.vue').default);
Vue.component('all-product', require('./components/AllProduct.vue').default);
Vue.component('to-do', require('./components/toDoComponent.vue').default);
Vue.component('Cart', require('./components/Cart.vue').default);


const app = new Vue({
    el: '#app',
    store
});
