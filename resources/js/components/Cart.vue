<template>
    <div>
        <Navbar></Navbar>
        <h1 class="text-center text-success fw-bold">Shooping Cart</h1>
        <div class="container my-5" v-if="Cart.length !== 0">
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col-1"></th>
                        <th scope="col-1">Image</th>
                        <th scope="col-1">Product Name</th>
                        <th scope="col-1">Quantity</th>
                        <th scope="col-1">Price</th>
                        <th scope="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in Cart" :key="index">
                        <td class="align-middle">
                            <input type="checkbox" v-model="selectedValues" :value="item.priceUser" @change="viewTotal"
                                @click="setStatus(index)">
                        </td>
                        <td>
                            <div style="width: 200px;">
                                <img :src="item.img" alt="gambar produk" style="width: inherit;">
                            </div>
                        </td>
                        <td class="align-middle">{{ item.nameProduct }}</td>
                        <td class="align-middle">{{ item.quantity }}</td>
                        <td class="align-middle">Rp.{{ item.priceUser }}</td>
                        <td class="align-middle">
                            <button class="btn btn-danger" @click="removeItem(index)">Delete</button>
                            <button class="btn btn-danger" @click="clearAll(index)">Delete All</button>
                        </td>
                    </tr>
                    <tr v-if="selectedValues.length > 0 && Total > 0">
                        <td></td>
                        <td class="fw-bold fs-4">Total :</td>
                        <td></td>
                        <td></td>
                        <td class="fw-bold fs-4">Rp.{{ Total }}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


            <div v-if="Total > 0">
                <button class="btn btn-success" type="button" @click="handleCheckOut">
                    Check Out
                </button>
            </div>
        </div>

        <div v-else class="text-center mt-5">
            <div class="bg-danger text-white w-75 p-4 m-auto">
                <h3>Tidak Ada Produk Disini</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            selectedValues: [],
        }
    },
    methods: {
        removeItem(index) {
            this.selectedValues.fill(0)
            this.$store.dispatch("removeCartProduct", index);
            this.$store.dispatch("getTotal", 0)
        },
        clearAll(item) {
            this.selectedValues.fill(0)
            this.$store.dispatch("clearCart", item);
            this.$store.dispatch("getTotal", 0)
        },
        handleCheckOut() {
            this.$store.dispatch("checkOut")
        },
        viewTotal() {
            let amount = this.selectedValues.reduce((a, b) => a + b, 0)
            this.$store.dispatch("getTotal", amount)
        },
        setStatus(index) {
            this.$store.dispatch("handleStatus", index)
        }
    },
    computed: {
        ...mapGetters(["Food", "Cart", "Total"]),
    },
    mounted() {
        this.selectedValues = this.Cart.filter(item => item.status).map(item => item.priceUser);
        this.viewTotal();
    },
    watch: {
        selectedValues: {
            handler: function (newVal) {
                this.Cart.forEach((item) => {
                    item.status = newVal.includes(item.priceUser);
                });
            },
            deep: true
        }
    }
};
</script>
-->
