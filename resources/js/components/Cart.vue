<template>
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
                        <button class="btn btn-danger" @click="deleteList(item, index)">Delete</button>
                        <button class="btn btn-danger" @click="deleteAll(index, item)">Delete All</button>
                    </span>
                </tr>
                <tr v-if="total > 0">
                    <td class="fw-bold">Total : </td>
                    <td></td>
                    <td class="fw-bold">Rp.{{total}}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="total > 0">
            <button  class="btn btn-success" @click="checkOut">Check Out</button>
        </div>
    </div>
</template>

<script>
    export default{
        props : {
            Cart : {
                type : Array,
            },
            total : {
                type : Number
            }
        },
        methods : {
            deleteList(item, index){
                this.$emit("emitDelete", item, index)
            },
            deleteAll(index, item){
                this.$emit("emitDeleteAll", index, item)
            },
            checkOut(){
                this.$emit("emitCheckOut")
            }
        }
    }
</script>