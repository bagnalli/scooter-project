class Scooter {
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    isBroken = isBroken;
  }
}

module.exports = Scooter;
