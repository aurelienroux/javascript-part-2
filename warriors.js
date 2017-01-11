function Warrior(name, gender){
    this.name = name,
    this.gender = gender,
    this.weapon = "wooden sword",
    this.level = 1,
    this.power = (Math.floor(Math.random() * 100) + 1),
    this.fight = function (){
        console.log(this.name + " rushes to the arena with a " + this.weapon )
    },
    this.faceoff = function(opponent){
        if ( this.power === opponent.power ){
            console.log("Everybody died at the same time!!! DRAW!!")
        } else if( this.power > opponent.power){
            console.log(this.name + " did a fatality on " + opponent.name + "!!! BOOM!")
        } else {
           console.log(this.name + " got his a** kicked by " + opponent.name + "!!! BOOM!")
        }
    }
}

var conan = new Warrior("Conan", "M");
var xena = new Warrior("Xena", "F");

console.log(conan.fight());
console.log(conan.faceoff(xena));