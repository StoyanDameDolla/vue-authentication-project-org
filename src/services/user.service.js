import axios from "axios";
import authHeader from "./auth.header";

const URL = "http://localhost:8080/api/test";

class UserService {
  /* Class holding helper methods for accessing data */
  getContent() {
    return axios.get(URL + "all");
  }

  getUserBoard() {
    return axios.get(URL + "user", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(URL + "mod", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
