function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = []
}

function Email(address, type){
    this.address = address,
    this.type = type || "other"
}

Person.prototype.addEmail = function(email, type){
    this.email.push(new Email(email,type))
}

var Aure = new Person("Aurelien", "Roux");
Aure.addEmail("aureroux@me.com", "home")

console.log(Aure);