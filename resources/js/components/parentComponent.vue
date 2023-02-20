<template>
    <div class="container my-5">
        <div class="text-center w-100" style="cursor: pointer">
            <span @click="isShow = true">All Products ||</span>
            <span @click="isShow = false" >Cart <p class="text-danger fw-bold d-inline">{{ totalItem }}</p></span>
        </div>
        <div v-if="isShow == true">
            <all-product 
            :product="product"
            @emitAdd="addToCart"
             >
            </all-product>
        </div>
        <div v-else>
            <Cart 
            :Cart="Cart"
            @emitDelete="deleteList"
            @emitDeleteAll="deleteAll"
            @emitCheckOut="checkOut"
            :total="total"
            >
            </Cart>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';
import { mapGetters } from 'vuex';
export default {
    data(){
        return {

        }
    },
        mounted() {
            console.log('Component mounted.')
            this.$store.dispatch('getData')
        },
        // methods : {
        //     addToCart(index){
        //         const addedItem = this.Cart.find(item => item.id === index.id)
        //         const limitItem = index.stock > 0;
        //         if(limitItem){
        //             index.stock -= 1
        //             if(addedItem){
        //                 index.quantity++
        //             }else{
        //                 index.quantity = 1
        //                 this.Cart.push(index)
        //             }
        //             this.totalItem++
        //             index.priceUser = index.price * index.quantity
        //             this.total += index.price
        //         }
        //     },
        //     deleteList(item, index){
        //         if(item.quantity === 1){
        //             this.Cart.splice(index, 1)
        //             item.stock++
        //             this.total -= item.price
        //         }else{
        //             item.quantity--
        //             item.stock++
        //             item.priceUser -= item.price
        //             this.total -= item.price
        //         }
        //         this.totalItem--
        //     },
        //     deleteAll(index, item){
        //         this.Cart.splice(index, 1)
        //         item.stock += item.quantity
        //         this.total -= item.priceUser
        //         this.totalItem-= item.quantity
        //     },
        //     checkOut(){
        //         swal(`Pay Us Rp.${this.total}`, {
        //             buttons: true,
        //         });
        //     }
        // },
        computed : {
            // ...mapGetters({
            //     product : 'getProductList'
            // })
        }
    }
</script>
