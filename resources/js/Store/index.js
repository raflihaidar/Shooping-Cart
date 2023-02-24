import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        total: null,
    },
    getters: {
        Food: (state) => state.products,
        Clothes: (state) => state.products,
        Toys: (state) => state.products,
        Cart: (state) => state.cart,
        Total: (state) => state.total,
    },
    actions: {
        async getFoodProducts({ commit }) {
            await axios.get("api/getFoodProducts").then((response) => {
                commit("SET_FOOD", response.data);
            });
        },
        async getClothesProducts({ commit }) {
            await axios.get("api/getClothesProducts").then((response) => {
                commit("SET_CLOTHES", response.data);
            });
        },
        async getToysProducts({ commit }) {
            await axios.get("api/getToysProducts").then((response) => {
                commit("SET_TOYS", response.data);
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
        getTotal({ commit }, payload) {
            commit("SET_TOTAL", payload);
        },
        checkOut({ commit }, payload) {
            commit("CHECK_OUT", payload);
        },
    },
    mutations: {
        SET_FOOD: (state, payload) => (state.products = payload),
        SET_CLOTHES: (state, payload) => (state.products = payload),
        SET_TOYS: (state, payload) => (state.products = payload),
        SET_TOTAL: (state, payload) => (state.total = payload),
        CHECK_OUT: (state) => {
            swal(`Total Belanjaan Anda Rp.${state.total}\nBayar Sekarang ? `, {
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
                        state.total = null;
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
                    addedItem.priceUser = payload.price * addedItem.quantity;
                } else {
                    state.cart.push({
                        ...payload,
                        quantity: 1,
                        priceUser: payload.price,
                    });
                }
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
