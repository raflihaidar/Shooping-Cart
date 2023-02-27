<template>
    <div class="container mx-auto my-5 d-flex text-center w-100 justify-content-center align-items-center"
        style="cursor: pointer">
        <router-link to="/" class="text-decoration-none text-reset fs-5">Food ||</router-link>
        <div class="position-relative px-1">
            <router-link to="/cart" class="text-decoration-none text-reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"
                    class="bi bi-cart-fill d-inline" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span
                    class="fw-bold position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger">{{
                        totalItems }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['Cart']),
        totalItems() {
            return this.Cart.reduce((a, b) => a + b.quantity, 0)
        }
    }
}
</script>
