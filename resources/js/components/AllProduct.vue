<template>
    <div class="grid container my-5">
        <h1 class="text-center">All Products</h1>
        <div class="row my-2 m-auto p-5">
            <div v-for="item in listProducts" :key="item.id" class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img :src="item.img" class="card-image" alt="gambar">
                    <div class="card-body h-75">
                        <h5 class="card-title">{{ item.nameProduct }}</h5>
                        <p>{{ item.description }}</p>
                        <p>{{ item.stock }}</p>
                        <p>Rp. {{ item.price }}</p>
                        <div v-if="item.stock > 0">
                            <button href="#" class="btn btn-success" @click="addToCart(item)">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        props : {
            listProducts : {
                type : Array,
            },
        },
        methods : {
            addToCart(index){
                this.$emit("emitAdd", index)
            },
        },
    }
</script>