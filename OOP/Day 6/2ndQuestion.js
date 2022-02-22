class Inverter{
    constructor(current, operating_voltage){
        this.current = current;
        this.operating_voltage = operating_voltage;
    }
    getPowerRating(){
        return this.current*this.operating_voltage;
    }
}

class SolarInverter extends Inverter{
    constructor(current, operating_voltage){
        super(current,operating_voltage);
        this.hasSolarPanel = true;
        this.gridOn = true;
    }
}

class withBattery extends SolarInverter{
    constructor(current, operating_voltage){
        super(current, operating_voltage);
        this.enargyStores = true;
    }
}

class withOutBattery extends SolarInverter{
    constructor(current,operating_voltage){
        super(current, operating_voltage);
        this.enargyStores = false;
    }
}

class nonSolarInverter extends Inverter{
    constructor(current,operating_voltage){
        super(current,operating_voltage);
        let battery = new withBattery();
        this.hasBattery = battery.enargyStores;
    }
}

const power = new SolarInverter(240, 5);
console.log(power.getPowerRating());