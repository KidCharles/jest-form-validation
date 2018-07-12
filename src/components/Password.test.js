let fns = require("./utils/functions");

test('"Charles" should return true', () => {
  //arange & act
  let result = fns.usernameCheck("Charles");
  expect(result).toBeTruthy();
});
