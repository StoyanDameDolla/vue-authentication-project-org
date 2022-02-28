/* Provides methods for HTTP request & response - Login, Logout and Register */

import axios from "axios";

const URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(URL + "signin", {
        username: user.username,
        password: user.password,
      })

      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();
