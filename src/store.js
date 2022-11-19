import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        role: ''
    },
    mutations: {
      set_role(state, role) {
        state.role = role;
      } 
    },
    actions: {
        async signin({ commit }, user) {
            try {
                const role = await this._vm.$api.signin(user);
                await commit.set_role(role);
            } catch (err) {
                console.log(err);
            }
        },
        async signup({commit}, user) {
            try {
                const response = await this._vm.$api.signup(user);
                await commit.set_role(response);
            } catch (err) {
                console.log(err);
            }
        }
    }
})