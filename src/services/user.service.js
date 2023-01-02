import axiosAPI from "./axiosInstanse";

class UserService {
    async deposit_to_balance(deposit) {
        const response = await axiosAPI.post("/deposit_to_balance", {
            username: deposit.login,
            sum: deposit.sum
        });
        return response.data;
    }
    get_users(page) {
        return axiosAPI.get(`/list_users?page=${page}`);
    }
    get_user_balance() {
        return axiosAPI.get('/user_balance');
    }
    get_user_info() {
        return axiosAPI.get('/user_info');
    }
}

export default new UserService();