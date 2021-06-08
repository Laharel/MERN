class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.Resilience = res
    }
    attack(target){
        target.Resilience -= this.power
        console.log(target.name + "'s resilience has reduced by " + this.power+ " and the current resilience : " + target.Resilience)
    }
}
class Effect extends Card{
    constructor(name, cost ,stat ,magnitude){
        super(name, cost)
        this.stat=stat
        this.magnitude=magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat == "power") {
                if (this.magnitude > 0){
                    target.power += this.magnitude
                    console.log(target.name+"'s "+this.stat+" has increased by "+this.magnitude+" and it has become "+target.power)
                }   
                else{
                    target.power += this.magnitude
                    console.log(target.name+"'s "+this.stat+" has decreased by "+Math.abs(this.magnitude)+" and it has become "+target.stat)
                }
            } else {
                if (this.magnitude > 0){
                    target.Resilience += this.magnitude
                    console.log(target.name+"'s "+this.stat+" has increased by "+this.magnitude+" and it has become "+target.Resilience)
                }   
                else{
                    target.Resilience += this.magnitude
                    console.log(target.name+"'s "+this.stat+" has decreased by "+Math.abs(this.magnitude)+" and it has become "+target.Resilience)
                }
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    
}

//units
const unit1 = new Unit("Red Belt Ninja",  3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
//effects
const effect1 = new Effect("Hard Algorithm", 2, "Resilience" ,magnitude = 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "Resilience", magnitude = -2);
const effect3 = new Effect("Pair Programming", 3, "power",magnitude = 2);
//turn1
effect1.play(unit1);// use Hard Algorithm on Red Belt Ninja increase resilience by 3
//turn2 
effect2.play(unit1);// use Unhandled Promise Rejection on Red Belt Ninja decrease resilience by 2
//turn3 
effect3.play(unit1);// use Pair Programming on Red Belt Ninja increase power by 2
unit1.attack(unit2);// Red Belt Ninja attacks Black Belt Ninja