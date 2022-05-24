class Employ{
    constructor(name){
        this.name="shivam";
    }

    details(){
        console.log(`Hi this is ${this.name} here`);
    }
}

class Manger extends Employ{
    constructor(task){
        super();
        this.task=task;
    }
    details(){
        console.log("**********************")
    }
    assignWork(){
        console.log(`Good morning ${this.name} please complete task soon`)
        super.details()
        console.log(`with super we can called super.details() and with help of
         this.detals()\nwe called parent class method`)
        super.details()
    }
}
let m = new Manger("api call", "raj");
m.assignWork()
// m.details()

// *****************************static method *****************************************
// Static methods and properties are defined on the class/constructor itself, not on instance objects. These are specified
// in a class definition by using the static keyword.
// #) when we called static method with object instatce it gives error not function
console.clear()
class StaticMethod {
    static greeting(){
       return("Welcome to masai school")
    }
}

class Test extends StaticMethod{

}
let s= new StaticMethod();
console.log('static : ', StaticMethod.greeting())
console.log(' static method also access to child class ',Test.greeting())
// console.clear()
class Teacher {
    constructor(){
        this.topper=[];
    }
   set topperName(val){
        this.topper.push(val)
        console.log("topper : ", this.topper)
    }
    get topperName(){
        console.log("topper : ", this.topper[this.topper.length-1])
    }
}
let t=new Teacher();
t.topperName="A";
t.topperName="BB";
t.topperName=""
console.log("****", t.topper, '\n topper is : ',t.topper)
// t.topperName("B");


// **************** prototype Inheritance examples********************

let t={
    name:"shiv",
    detail: function(){
        console.log(`my name ${this.name} `)
    }
}
let test= Object.create(t);
// all the property and method present in t are available to test object this is inheritance
// Prototypal inheritance is made through object references internally and objects are completely mutable. This
// means any change you make on a prototype will immediately affect every other object that prototype is prototype

test.detail()