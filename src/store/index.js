import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 0,
        isAuth: false
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        incLikes(state) {
            state.likes += 1;
        },
        decLikes(state) {
            state.likes -= 1;
        }
    },
    actions: {},
    modules: {}
})