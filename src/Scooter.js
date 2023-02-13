class Scooter {
  constructor(user, serial, nextSerial, charge, isBroken) {
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    isBroken = isBroken;
  }
  rent() {
    if (isBroken === true) {
      throw new Error("scooter needs repair");
    }
    if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    } else {
      this.station = null;
    }
  }
  dock(station) {}
}

module.exports = Scooter;
