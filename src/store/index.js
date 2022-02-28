import {createStore} from "vuex";
import {auth} from "./auth.module";

console.log(auth)

const store = createStore({
    modules: {
        auth: auth,
    },
});

export default store;