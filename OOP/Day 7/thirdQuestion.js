class Address{
    constructor(){
        this.streetAddress = "Jessore Road";
        this.city = "Guma";
        this.state = "WB";
        this.postalCode = 743704;
    }
}

class PersonDetails{
    constructor(){
        this.firstName = "Rashed";
        this.lastName = "Sahajee";
        this.age = 24;
        this.address = Address;
        this.phoneNumbers = new Map([["string", "string"]]);
    }
} 