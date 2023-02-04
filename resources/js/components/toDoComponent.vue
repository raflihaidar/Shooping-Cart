<template>
    <div class="container">
        <h1>To do</h1>
        <form>
            <input type="text" v-model="input" placeholder="mau ngapain hari ini ?">
            <button type="button" @click="addList">Submit</button>
        </form>
        <ul v-if="list.length <= 5">
            <li v-for="(item, index) in list" :key="index" class="item">
                {{ item.title }} 
                <button type="button" @click="done">done</button> 
                <button type="button" @click="deleteList(index)">delete</button>
            </li>
        </ul>
    </div>
</template>


<script>
    export default({
        data : function(){
            return{
                list : [
                    {
                        title : "menyapu"
                    },
                    {
                        title : "cuci piring"
                    },
                    {
                        title : "pel"
                    }
                ],
                input : ""
            }
        },
        mounted(){
            console.log("Component mounted")
        },
        methods : {
            addList(){
                let newList = {
                    title : this.input
                }
                this.list.push(newList)
                this.input = ""
            },
            deleteList(index){
                this.list.splice(index, 1)
            },
            done(){
                let allItem = document.querySelectorAll(".item");
                for(let index of allItem){
                    index.style.color = "red";
                }
            }
        }
    })
</script>