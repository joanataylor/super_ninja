class Ninja {
  constructor(name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  
  sayName(){
    console.log(this.name)
  }

  showStats(){
    console.log(this)
  }
  
  drinkSake(){
    this.health+=10;
  }
}
//create a class Sensei that inherits from the Ninja class
//add an attribute: wisdom default to 10
// create a method: speakWisdom()

class Sensei extends Ninja{
  constructor(name){
    super(name, 200, 10, 10)
    this.wisdom = 10;
  }

  speakWisdom(){
    this.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
  }


}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"