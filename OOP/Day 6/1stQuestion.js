
const spendingLimitMP = 100000;
const spendingLimitPM = 10000000;
const spendingLimitMinister = 1000000;

class Constituency{
    getConstituency(){
        return 'Ashokenagar';
    }
}

class Driver{
    getDriver(){
        return 'Hari';
    }
}

class Aircraft{
    getCraft(){
        return 'Aircraft is available';
    }
}

class Commisioner{
    constructor(spending) {
        this.permission = false;
        this.spending = spending;
    }
    setPersmission(permission){
        this.permission = permission;
    }
    canArrest(){
        if(this.spending > spendingLimitMP){
            return true;
        }
        if(this.spending > spendingLimitMinister || this.permission==true){
            return true;
        }
        return false;
    }
}

class MP{
    constructor(name,spending){
        this.name = name;
        this.spending = spending;
        this.constituencyName = new Constituency();
        this.driverName = new Driver();
    }

    getConstituency(){
        return this.constituencyName.getConstituency();
    }
    getDriver(){
        return this.driverName.getDriver();
    }
}

class Minister extends MP{
    constructor(name,spending){
        super(name,spending);
    }
}

class PM extends MP{
    constructor(name, spending, permission) {
        super(name,spending);
        this.permission = permission;
        this.airCraft = new Aircraft();
        this.comisioner = new Commisioner();
    }
    static hasAircraft(){
        return this.airCraft.getCraft();
    }
    givePermission(permission){
        this.comisioner.setPersmission(permission);
    }
}

const mpp = new MP("MP",1000000);
const min = new Minister("Minister", 1000)
const comisioner = new Commisioner(min.spending);
const pm = new PM();
pm.givePermission();
console.log(min.spending, min.name, min.getConstituency(),min.getDriver());
console.log(comisioner.canArrest());