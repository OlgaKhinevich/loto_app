import axiosAPI from "./axiosInstanse";

class AuthService {
    async login(user) {
        const response = await axiosAPI.post("/signin", {
            login: user.login,
            password: user.password
        });
        return response.status;
    }

    logout() {
        localStorage.removeItem('userRole');
    }

    register(user) {
        return axiosAPI.post("/signup", {
            login: user.login,
            password: user.password
        });
    }
}

export default new AuthService();