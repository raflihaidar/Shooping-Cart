import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        products: [],
        product: null,
        cart: [],
        total: 0,
    },
    getters: {
        AllProducts: (state) => state.products,
        Cart: (state) => state.cart,
        Total: (state) => state.total,
    },
    actions: {
        async getAllProducts({ commit }) {
            await axios.get("api/getDataProducts").then((response) => {
                commit("UPDATE_PRODUCTS", response.data);
            });
        },
        addToCart({ commit }, payload) {
            commit("UPDATE_CART", payload);
        },
        removeCartProduct({ commit }, index) {
            commit("REMOVE_ITEM", index);
        },
        clearCart({ commit }, payload) {
            commit("CLEAR_CART", payload);
        },
        checkOut({ commit }) {
            commit("CHECK_OUT");
        },
    },
    mutations: {
        UPDATE_PRODUCTS: (state, payload) => (state.products = payload),
        SET_PRODUUCT: (state, payload) => (state.product = payload),
        CHECK_OUT: (state) => {
            swal(`Total Belanjaan Anda ${state.total}\nBayar Sekarang ? `, {
                buttons: {
                    cancel: "Batal",
                    confirm: "Bayar",
                },
            }).then((bayar) => {
                if (bayar) {
                    swal(`Berhasil di Bayar`, {
                        icon: "success",
                        button: false,
                        timer: 2000,
                    }).then(() => {
                        state.total = 0;
                        state.cart = [];
                    });
                } else {
                    swal("Batal di Bayar", {
                        timer: 2000,
                    });
                }
            });
        },
        UPDATE_CART: (state, payload) => {
            const addedItem = state.cart.find((item) => item.id === payload.id);
            const limitItem = payload.stock > 0;
            if (limitItem) {
                payload.stock -= 1;
                if (addedItem) {
                    addedItem.quantity++;
                    console.log(addedItem.priceUser);
                    addedItem.priceUser = payload.price * addedItem.quantity;
                } else {
                    state.cart.push({
                        ...payload,
                        quantity: 1,
                        priceUser: payload.price,
                    });
                }
                state.total += payload.price;
            }
        },
        REMOVE_ITEM: (state, index) => {
            const product = state.cart[index];
            if (product.quantity === 1) {
                state.cart.splice(index, 1);
            } else {
                product.quantity--;
                product.priceUser -= product.price;
            }
            state.products.map((item) => {
                if (item.id === product.id) {
                    item.stock++;
                }
                return item;
            });
            state.total -= product.price;
        },
        CLEAR_CART: (state, index) => {
            const product = state.cart[index];
            state.cart.splice(index, 1);
            state.products.map((item) => {
                if (item.id === product.id) {
                    item.stock += product.quantity;
                }
                return item;
            });
            state.total -= product.priceUser;
        },
    },
});
