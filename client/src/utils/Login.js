const axios = require("axios");
axios.defaults.withCredentials = true;

export const isLoggedIn = async () => {
  await axios
    .get("http://localhost:8000/user/login", { withCredentials: true })
    .then((res) => {
      console.log(res);
      console.log(res.data.isLoggedIn);
      return true;
    })
    .catch((error) => {
      console.log(error);
      console.log("res.data.isLoggedIn");
      return false;
    });
}; // TODO write a function that fetchs from /user/login and checks whether the user is logged in

export const login = (email, password) => {
  axios
    .post(
      "http://localhost:8000/user/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    )
    .then(function (response) {
      console.log(response);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

export const logout = () => {
  axios
    .post("http://localhost:8000/user/logout", { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
