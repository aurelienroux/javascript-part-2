function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = []
}

function Email(address, type){
    this.address = address,
    this.type = type || "other"
}

var m = new Email("my address", "home");

console.log(m)