export default function authHeader() {
  /* Helper method - checks against local storage and user presence
    - if user logged in --> returnt HTTP Auth header
    - else --> return an emtpy object reference   */
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
