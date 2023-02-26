<template>
    <div>
        <Navbar></Navbar>
        <Option></Option>
        <div class="grid container mt-2">
            <h1 class="text-center text-success fw-bold">Food</h1>
            <div class="row my-2 m-auto p-5">
                <div v-for="item in Food" :key="item.id" class="col-md-4">
                    <div class="card mb-5 cardCustom" style="width: 18rem; cursor: pointer;">
                        <img :src="item.img" class="card-image" alt="gambar">
                        <div class="card-body h-75">
                            <h5 class="card-title">{{ item.nameProduct }}</h5>
                            <p>{{ item.description }}</p>
                            <p>Stock : {{ item.stock }}</p>
                            <p>Rp. {{ item.price }}</p>
                            <div v-if="item.stock > 0">
                                <button href="#" class="btn btn-success" @click="addToCart(item)">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    methods: {
        addToCart(item) {
            this.$store.dispatch('addToCart', item)
        },
    },
    computed: {
        ...mapGetters(['Food']),
    },
    mounted() {
        if (this.$store.state.cart.length === 0) {
            this.$store.dispatch('getFoodProducts')
        }
    }
}
</script>