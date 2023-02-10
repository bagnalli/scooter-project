const User = require("../src/User");

// User tests here
describe("User class tests", () => {
  const test1 = new User("testName", "password123", 20, true);

  // test username
  test("test username", () => {
    expect(test1.username).toBe("testName");
  });

  // test password
  test("test password", () => {
    expect(test1.password).toBe("password123");
  });
  // test age
  test("test age", () => {
    expect(test1.age).toBe(20);
  });
  // test login
  test("test loggedIn", () => {
    expect(test1.loggedIn).toBe(true);
  });
  // test logout
});
