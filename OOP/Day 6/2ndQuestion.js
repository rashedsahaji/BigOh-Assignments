"use strict";
class Inverter {
    constructor(current, operatingVoltage) {
        this.current = current;
        this.operatingVoltage = operatingVoltage;
    }
    getCurrent() {
        return this.current;
    }
    setCurrent(current) {
        this.current = current;
    }
    getOperatingVoltage() {
        return this.operatingVoltage;
    }
    setOperatingVoltage(operatingVoltage) {
        this.operatingVoltage = operatingVoltage;
    }
    getDetails() {
        console.log(`PowerRating is : ${this.current * this.operatingVoltage}`);
    }
}
class SolarPanel {
    constructor(producedEnergy) {
        this.producedEnergy = producedEnergy;
    }
    getEnergyDetails() {
        return this.producedEnergy;
    }
    setEnergyDetails(producedEnergy) {
        this.producedEnergy = producedEnergy;
    }
    getDetails() {
        console.log(`Energy Produced by Solar Panel is ${this.producedEnergy}`);
    }
}
class Battery {
    constructor(voltage) {
        this.voltage = voltage;
    }
    getVoltage() {
        return this.voltage;
    }
    setVoltage(voltage) {
        this.voltage = voltage;
    }
    getDetails() {
        console.log(`${this.voltage}V battery`);
    }
}
class SolarInverter extends Inverter {
    constructor(current, operatingVoltage, solarPannel) {
        super(current, operatingVoltage);
        this.solarPannel = solarPannel;
    }
    getSolarPanel() {
        return this.solarPannel;
    }
    setSolarPanel(solarPannel) {
        this.solarPannel = solarPannel;
    }
    getDetails() {
        super.getDetails();
        this.solarPannel.getDetails();
    }
}
class Icruz extends Inverter {
    constructor(current, operatingVoltage, battery) {
        super(current, operatingVoltage);
        this.battery = battery;
    }
    getBattery() {
        return this.battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getDetails() {
        super.getDetails();
        this.battery.getDetails();
    }
}
class PCU extends SolarInverter {
    constructor(current, operatingVoltage, solarPannel, battery) {
        super(current, operatingVoltage, solarPannel);
        this.battery = battery;
        this.gridSystem = false;
    }
    getGridSystem() {
        return this.gridSystem;
    }
    getBattery() {
        return this.battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getDetails() {
        super.getDetails();
        this.battery.getDetails();
        console.log(`Battery power is ${this.getSolarPanel().getEnergyDetails()}`);
        console.log(`Has Grid System : ${this.gridSystem}`);
    }
}
class Regalia extends SolarInverter {
    constructor(current, operatingVoltage, solarPannel) {
        super(current, operatingVoltage, solarPannel);
    }
    getDetails() {
        super.getDetails();
    }
}
class GTI extends SolarInverter {
    constructor(current, operatingVoltage, solarPannel) {
        super(current, operatingVoltage, solarPannel);
        this.gridSystem = true;
    }
    getDetails() {
        super.getDetails();
        console.log(`Has Grid System : ${this.gridSystem}`);
    }
}
let solarPannel = new SolarPanel(200);
let battery = new Battery(25);
let pcu = new PCU(15, 15, solarPannel, battery);
pcu.getDetails();