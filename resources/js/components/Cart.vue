<template>
    <div>
        <Navbar></Navbar>
        <div class="container my-5">
            <h1>Shooping Cart</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in Cart" :key="index">
                        <td>{{ item.nameProduct }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>Rp.{{ item.priceUser }}</td>
                        <span class="ms-5">
                            <button
                                class="btn btn-danger"
                                @click="removeItem(index)"
                            >
                                Delete
                            </button>
                            <button
                                class="btn btn-danger"
                                @click="clearAll(index)"
                            >
                                Delete All
                            </button>
                        </span>
                    </tr>
                    <tr v-if="Total > 0">
                        <td class="fw-bold">Total :</td>
                        <td></td>
                        <td class="fw-bold">Rp.{{ Total }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-if="Total > 0">
                <button
                    class="btn btn-success"
                    type="button"
                    @click="handleCheckOut"
                >
                    Check Out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    methods: {
        removeItem(index) {
            this.$store.dispatch("removeCartProduct", index);
        },
        clearAll(item) {
            this.$store.dispatch("clearCart", item);
        },
        handleCheckOut(){
            this.$store.dispatch("checkOut")
        }
    },
    computed: {
        ...mapGetters(["AllProducts", "Cart", "Total"]),
    },
};
</script>
-->
