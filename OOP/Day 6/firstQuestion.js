class Vehicle {
  constructor(color, VehicleNumber) {
    this.color = color;
    this.VehicleNumber = VehicleNumber;
  }

}

class Car extends Vehicle {
  constructor(color, VehicleNumber, driverName) {
    this.color = color;
    this.VehicleNumber = VehicleNumber;
    this.driverName = driverName;
  }
  getDriver() {
    return this.driverName;
  }
}

class Aircraft extends Vehicle {
  constructor(color, VehicleNumber, pilotName) {
    super()
    this.color = color;
    this.VehicleNumber = VehicleNumber;
    this.pilotName = pilotName;
  }
}

class Person {
    constructor(name) {
      this.name = name;
    }
  }

class MP extends Person {
  constructor(name, post, constName, carName, driverName, spendingLimit, amountSpent) {
    super();
    this.name = name;
    this.post = post;
    this.constName = constName;
    this.carName = carName;
    this.driverName = driverName;
    this.spendingLimit = spendingLimit;
    this.amountSpent = amountSpent;
  }
  getConstituency() {
    console.log(`The winning constituency of the ${this.name} is:- ${this.constName}`);
  }
  getDriver() {
    console.log(`The Driver of the ${this.name} is ${this.driverName}`);
  }
  checkExceedsSpendingLimit() {
    if (this.amountSpent > this.spendingLimit) {
      return true;
    }
    return false;
  }
}

class Minister extends MP {
  constructor(name, post, constName, carName, driverName, spendingLimit, amountSpent) {
    super()
    this.name = name;
    this.post = post;
    this.constName = constName;
    this.carName = carName;
    this.driverName = driverName;
    this.spendingLimit = spendingLimit;
    this.amountSpent = amountSpent;
  }
}

class PM extends Minister {
  constructor(name, constName, carName, driverName, spendingLimit, amountSpent, aircraftName) {
    super()
    this.name = name;
    this.constName = constName;
    this.carName = carName;
    this.driverName = driverName;
    this.spendingLimit = spendingLimit;
    this.amountSpent = amountSpent;
    this.aircraftName = new Aircraft("white", "B-150", aircraftName);
  }

  getPermission(homeMinister) {
    if (homeMinister.checkExceedsSpendingLimit())
      return true;
  }
}


class Commisioner {
  constructor() { }

  canArrest(objectToCheck, hasPmPermission) {

    if (!hasPmPermission) {
      return false;
    }

    if (objectToCheck.post === "MP" && objectToCheck.checkExceedsSpendingLimit())
      console.log("Commisioner can arrest MP");

    if (objectToCheck.post === "Minister" && objectToCheck.checkExceedsSpendingLimit() && hasPmPermission) {
      console.log("Comissioner can Arrest Minister");
    }

  }
}

const PM_SPENDING_LIMIT = 10000000;
const MINISTER_SPENDING_LIMIT = 1000000;
const MP_SPENDING_LIMIT = 100000;


let commisonerOfDelhi = new Commisioner();
let pmOfIndia = new PM("Raja", "Rajarhat", "Mercedes", "Ramesh", PM_SPENDING_LIMIT, 100000000, "Air India One");
let mpOfNoida = new MP("Rashed", "MP", "North", "Audi24", "Hari", MP_SPENDING_LIMIT, 1000);
let homeMinister = new Minister("Rahul", "Minister", "Ashokenagar", "BMW", "Babul", MINISTER_SPENDING_LIMIT, 10000000);


mpOfNoida.getDriver();
mpOfNoida.getConstituency();
commisonerOfDelhi.canArrest(mpOfNoida);
console.log("\n");

homeMinister.getDriver();
homeMinister.getConstituency();
commisonerOfDelhi.canArrest(homeMinister, pmOfIndia.getPermission(homeMinister));
console.log("\n");

pmOfIndia.getDriver();
pmOfIndia.getConstituency();
console.log("\n");