module.exports = {
  usernameCheck(username) {
    let flag = true;
    if (username.length < 6) flag = false;
    if (username.indexOf(" ") !== -1) flag = false;
    return flag;
  },

  passwordCheck() {}
};
