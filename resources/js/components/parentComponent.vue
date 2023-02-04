<template>
    <div class="container my-5">
        <div class="text-center w-100" style="cursor: pointer">
            <span @click="isShow = true">All Products ||</span>
            <span @click="isShow = false" >Cart <p class="text-danger fw-bold d-inline">{{ totalItem }}</p></span>
        </div>
        <div v-if="isShow == true">
            <all-product 
            :listProducts="listProducts"
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
    export default {
        data(){
            return {
                listProducts : [
                    {
                        id : 1,
                        nameProduct : "indomie",
                        img : "https://th.bing.com/th/id/OIP.7Vxe1efdq8rdUzwnZv1sXQHaF7?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        description : "Mie instan sejuta umat",
                        stock : 10,
                        price : 3500,
                        priceUser : 0,
                        quantity : 0
                    },
                    {
                        id : 2,
                        nameProduct : "Ayam Geprek",
                        img : "https://th.bing.com/th/id/OIP.W8-hDXdh2hGDY_DQqU52swHaG6?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        description : "dengan sambal pilihan",
                        stock : 5,
                        price : 10000,
                        priceUser : 0,
                        quantity : 0
                    },
                    {
                        id : 3,
                        nameProduct : "Sate",
                        img : "https://i2.wp.com/resepkoki.id/wp-content/uploads/2017/10/Resep-Sate-Ponorogo.jpg?fit=1613%2C1290&ssl=1",
                        description : "Sate paling enak",
                        stock : 20,
                        price : 18000,
                        priceUser : 0,
                        quantity : 0
                    }
                ],
                Cart : [],
                total : 0,
                totalItem : 0,
                isShow : true
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods : {
            addToCart(index){
                const addedItem = this.Cart.find(item => item.id === index.id)
                const limitItem = index.stock > 0;
                if(limitItem){
                    index.stock -= 1
                    if(addedItem){
                        index.quantity++
                    }else{
                        index.quantity = 1
                        this.Cart.push(index)
                    }
                    this.totalItem++
                    index.priceUser = index.price * index.quantity
                    this.total += index.price
                }
            },
            deleteList(item, index){
                if(item.quantity === 1){
                    this.Cart.splice(index, 1)
                    item.stock++
                    this.total -= item.price
                }else{
                    item.quantity--
                    item.stock++
                    item.priceUser -= item.price
                    this.total -= item.price
                }
                this.totalItem--
            },
            deleteAll(index, item){
                this.Cart.splice(index, 1)
                item.stock += item.quantity
                this.total -= item.priceUser
                this.totalItem-= item.quantity
            },
            checkOut(){
                swal(`Pay Us Rp.${this.total}`, {
                    buttons: true,
                });
            }
        },
    }
</script>
