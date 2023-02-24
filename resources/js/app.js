import store from "./Store";
require("./bootstrap");

window.Vue = require("vue").default;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("all-product", require("./components/Food.vue").default);
Vue.component("Cart", require("./components/Cart.vue").default);
Vue.component("NotFound", require("./components/NotFound.vue").default);

import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes,
});

const app = new Vue({
    el: "#app",
    store,
    router,
});
