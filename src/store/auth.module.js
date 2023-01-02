import AuthService from '../services/auth.service';

const auth = {
    state: {
        role: 'user'
    },
    mutations: {
        set_role(state, role) {
            state.role = role;
        }
    },
    actions: {
        async signin({ commit }, user) {
            try {
                const role = await AuthService.login(user);
                await commit.set_role(role);
            } catch (err) {
                console.log(err);
            }
        },
        async signup({ commit }, user) {
            try {
                const response = await AuthService.register(user);
                await commit.set_role(response);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default auth;