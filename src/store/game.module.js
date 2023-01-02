import GameService from '../services/game.service';

const game = {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async get_game_info({ commit }) {
            try {
                const info = await GameService.get_game_info();
                console.log(info);
                await commit("set_game_info", info);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default game;