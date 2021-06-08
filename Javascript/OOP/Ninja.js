class Ninja{
    constructor(name, health =30, speed = 3, strength = 3) {
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
const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Ichigo");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.Attack(ninja1);