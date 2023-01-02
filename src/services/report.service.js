import axiosAPI from "./axiosInstanse";

class ReportService {
    has_new_reports() {
        return axiosAPI.get("/has_new_reports");
    }
    reports() {
        return axiosAPI.get("/reports");
    }
}

export default new ReportService();