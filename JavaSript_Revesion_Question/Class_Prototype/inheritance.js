 // 1) Inheritance is a  class (subclass) to acquire the properties and methods of other class parent class 
// superclass it helps to reuse, customize, and enhance existing code,  it help to write code accurately
// and reduce the development time.

class Employee{

    constructor(name, id,age){
        this.name = name;
        this.id = id;
        this.age = age
    }

details(){
    console.log(`name is ${this.name} age is ${this.age}`)
}
}

class Manager extends Employee{
    #contactNo='';
    constructor(name, id, dep,age, contactNo, dob){
        super(name,id, age)
         this.dep=dep;
        this.#contactNo=contactNo;
        // static this.birth=dob;
        super.details()
    }
    // super().details()
    static vari='hoiiii'
    static staticMethodEx (){
        
    }
}

let m = new Manager('Harish', 111,"Web dev",100);
console.log('manager', m, '\n ', m)
console.log('xx', Manager.xx(), Manager.vari)
// static method only access with help of class name
// console.log('private', m.#contactNo)