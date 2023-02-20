import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state : {
        product : {},
        Cart : {},
        total : 0,
        totalItem : 0,
    },
    actions: {
        async getData(){
            await axios
                .get('api/getAllData')
                .then(response => console.log(response.data))
                .catch(err => console.log("error", err))
        }
    }
})

