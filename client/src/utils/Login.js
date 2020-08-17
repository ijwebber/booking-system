const axios = require("axios");
axios.defaults.withCredentials = true;

export const isLoggedIn = async () => {
  await axios
    .get("http://localhost:8000/user/login", { withCredentials: true })
    .then((res) => {
      console.log(res);
      return res.data.isLoggedIn;
    })
    .catch((error) => {
      console.log(error);
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
    .then((res) => {
      console.log(res);
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
