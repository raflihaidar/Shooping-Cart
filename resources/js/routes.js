import FoodCatalog from "./components/Food.vue";
import Cart from "./components/Cart.vue";
import NotFound from "./components/NotFound.vue";

export const routes = [
    {
        path: "/",
        name: "Food",
        component: FoodCatalog,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/*",
        name: "NotFound",
        component: NotFound,
    },
];
