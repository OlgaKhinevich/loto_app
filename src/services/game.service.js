import axiosAPI from "./axiosInstanse";

class GameService {
    get_game_info() {
        return axiosAPI.get("/game_info");
    }
    async add_combination(comb_info) {
        const response = axiosAPI.post("/add_combination", {
            combination: comb_info.combination,
            game_type: comb_info.game_type
        })
        return (await response).data;
    }
    get_my_combinations(round_id, page) {
        return axiosAPI.get(`/my_combinations?round_id=${round_id}&page=${page}`);
    }
    play_data() {
        return axiosAPI.get(`/play_data`);
    }
    async start_loto_round(start_date) {
        const response = axiosAPI.post("/play_loto", {
            start_date: start_date
        })
        return (await response).data;
    }
    get_round_history(last_round_id) {
        return axiosAPI.get(`/round_history?last_round_id=${last_round_id}`);
    }
    get_round_info(round_id) {
        return axiosAPI.get(`/round_info?round_id=${round_id}`);
    }
}

export default new GameService();