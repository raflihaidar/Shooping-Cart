<template>
    <div v-for="item in AllProducts" :key="item.id">
        <div>
            <img :src="item.img">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props : ['id'],
    computed : {
        ...mapGetters(['AllProducts']),
    },
    mounted(){
        this.$store.dispatch('getAllProducts')
    }
}
</script>