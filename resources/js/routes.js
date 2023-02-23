import CatalogProducts from "./components/AllProduct.vue";
import Cart from "./components/Cart.vue";
import DetailProducts from "./components/DetailProducts.vue";

export const routes = [
    {
        path: "/",
        name: "Catalog Products",
        component: CatalogProducts,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/pruduct/:id",
        name: "products",
        component: DetailProducts,
        props: true,
    },
    // {
    //     path: "/*",
    //     name: "NotFound",
    //     component: NotFound,
    // },
];
