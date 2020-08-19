const axios = require("axios");
axios.defaults.withCredentials = true;

export const isLoggedIn = async () => {
  return await axios
    .get("http://localhost:8000/user/login", { withCredentials: true })
    .then((res) => {
      return res.data.isLoggedIn;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const login = async (email, password) => {
  return await axios
    .post(
      "http://localhost:8000/user/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      return { success: res.data.success };
    })
    .catch(function (err) {
      return { success: false, errors: err.response.data };
    });
};

export const logout = async () => {
  return await axios
    .post("http://localhost:8000/user/logout", { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
