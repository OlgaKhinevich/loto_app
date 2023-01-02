import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.module'
import game from './game.module'
import report from './report.module'
import user from './user.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: { 
    },
    actions: {
    },
    modules: {
        auth,
        game,
        report,
        user
    }
})

export default store;