/*eslint no-restricted-globals: 0 */

import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/coaches";
const LOGIN_FAILURE_PAGE = "/";

// TODO: make this dynamic depending on env
// const REDIRECT_URI =  "http://lonestar-prospects.herokuapp.com/callback";
const REDIRECT_URI = "http://localhost:3000/callback";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-uc7sbv1x.auth0.com",
    clientID: "z6zPUYsgtr3Ptk4b6g2TFbBwTh4WMl5f",
    redirectUri: REDIRECT_URI,
    audience: "https://dev-uc7sbv1x.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile email",
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.isCoach = this.isCoach.bind(this);
  }

  login() {
    this.auth0.authorize();
    // login
    // get email
    // hit user endpoint
      // user endpoint will check if user exists
      // if user doesn't exist, it will create them with isCoach false
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        console.log(authResults);
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.removeItem("acces_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE_PAGE;
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  }

  isCoach() {
    return this.getProfile().email;
    // get email
    // look up in user table
    // return true if has coach role, false if not
  }
}
