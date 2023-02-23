import store from "./Store";
require("./bootstrap");

window.Vue = require("vue").default;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("all-product", require("./components/AllProduct.vue").default);
Vue.component("Cart", require("./components/Cart.vue").default);
Vue.component(
    "detailsProducts",
    require("./components/DetailProducts.vue").default
);
Vue.component("Modal", require("./components/Modals.vue"));

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
