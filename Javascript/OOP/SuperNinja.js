class Ninja{
    constructor(name, health = 30, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    Attack(target) {
        target.health -= this.strength;
        console.log(target.name + " has been attacked and the current health : "+ target.health)
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this);
    }
    drinkSake(){
        this.health += 10;
        console.log("health has increased by 10 and the current health :" + this.health)
    }
}
class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10,wisdom = 10){
        super(name, health, speed, strength);
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake()
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
