import UserService from '../services/auth.service';

const user = {
    state: {
        user_balance: null,
        user_info: {
            _id: '',
            balance: 0
        }
    },
    getters: {
        user_balance(state) {
            return state.user_balance;
        },
        user_info(state) {
            return state.user_info;
        }
    },
    mutations: {
        set_user_balance(state, balance) {
            // Object.assign(state.user_balance, balance);
            state.user_balance = balance;
        },
        set_user_info(state, info) {
            // Object.assign(state.user_info, info);
            state.user_info = info;
        }
    },
    actions: {
        async get_user_balance({ commit }) {
            try {
                const balance = await UserService.get_user_balance();
                await commit("set_user_balance", balance);
            } catch (err) {
                console.log(err);
            }
        },
        async get_user_info({ commit }) {
            try {
                const info = await UserService.get_user_info();
                console.log(info);
                await commit("set_user_info", info);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default user;