const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("Scooter Properties", () => {
  const testScooter = new Scooter("Salford", "bagnalli1", 1, 1, 100, false);

  // OBJECT TEST
  test("is scooter object", () => {
    expect(typeof testScooter).toEqual("object");
  });
  // STATION TEST
  test("is there a station?", () => {
    expect(testScooter.station).toBe("Salford");
  });
  // USER TEST
  test("is there a user?", () => {
    expect(testScooter.user).toBe("bagnalli1");
  });
  // SERIAL TEST
  test("Serial", () => {
    expect(testScooter.serial).toBe(1);
  });
  // NEXT SERIAL TEST
  test("nextSerial", () => {
    expect(testScooter.nextSerial).toBe(1);
  });
  // CHARGE TEST
  test("charge", () => {
    expect(testScooter.charge).toBe(100);
  });
});

// IS BROKEN TEST

// //Method tests
// describe("scooter methods", () => {
//   // tests here!
//   //rent method
//   //dock method
//   //requestRepair method
//   //charge method
// });
