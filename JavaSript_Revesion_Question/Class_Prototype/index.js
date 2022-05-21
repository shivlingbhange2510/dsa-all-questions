function CreatTure(ls){
    this.lifeSpane=ls;
}
CreatTure.prototype.breath=function(){
    console.log('breathing...')
}
let creature = new CreatTure(60);
console.log('creature : ', creature);
 
function Person(name,surname, age){
    this.firstName=name;
    this.lastName=surname;
    this.age=age;
    
}
let d= new Person()

Person.prototype.fullName=function(){
    console.log(`My name is ${this.firstName } ${ this.lastName}`)
}

Person.prototype.__proto__= Object.create(CreatTure.prototype)


let person2= new Person('Sachin', "Jadhav", 22);
let person1= new Person('shivling', "bhange", 22);
console.log('person1 ', person1);

// console.log('person2 ',person2,'\njj', person2.fullName(), '\n xx',  person2.breath)
console.log('fff', person2.breath())
