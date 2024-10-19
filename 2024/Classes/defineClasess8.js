/**
 * static method : this method is used only inside class even we can't be access this method outside class
 *
 */
class User {
  static mobile = 9975635849;
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  static details() {
    // console.log(getName());
    return this.mobile;
  }
  static getName(ct) {
    console.log(
      `my name is ${
        this.name
      } and no is  ${this.details()} I am living in ${ct}`
    );
  }
}

const user1 = new User("shiv", "Pune");
console.log("user", User.getName("Mumbai"));
// user1.details()

// *********************PRIVATE METHOD AND MEMBERS **********************
class Student {
  // belowe defined  private member
  #city;
  constructor(name, city) {
    this.name = name;
    this.#city = city;
  }
  // below defined private method
  #getCity() {
    return `I am from ${this.#city}`;
  }
  getName() {
    console.log(`my name is ${this.name},  I am from ${this.#getCity()}`);
  }
}

const std1 = new Student("shiv", "Pune");
std1.getName();

std1.name = "Pooja";
std1.city = "Surat";
//  belowe city won't be change bcs in getCity we used private variable or property so that
std1.getName();

// ***************GETTER AND SETTER IN CLASS*****************************

class Animal {
  #name;
  #age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return `${this.#name}`;
  }
  set name(name) {
    this.#name = name;
  }
}

const animal1 = new Animal("Dog", 5);
console.log(animal1.name);
animal1.name = "new Dog";
console.log(animal1.name);

// ******************CLASS INHERITANCE*************************

class School {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.listOfStudent = [];
  }
  getCount(boys, girl) {
    console.log(`${this.name} has ${boys} and ${girl}`);
  }
  addStudent(student) {
    this.listOfStudent.push({
      nameOfInstitute: this.name,
      studentname: student,
      city: this.city,
    });
  }

  printStudentDetails() {
    for (let i = 0; i < this.listOfStudent.length; i++) {
      const { nameOfInstitute, studentname } = this.listOfStudent[i];
      console.log(
        `Student name is ${studentname} belongs to ${nameOfInstitute} from ${this.city}  `
      );
    }
  }
}

const sch1 = new School("ZP School", "Pune");
sch1.addStudent("Shiv");
sch1.addStudent("Raj");
sch1.addStudent("Pooja");
sch1.printStudentDetails();

class College extends School {
  constructor(name, city) {
    // this.listOfStudent=[];
    // console.log("This inside College", super());
    super(name, city);
  }
  //   belowe is method overriding
  getCount(boys, girl, staff) {
    console.log(`${this.name} has ${boys} and ${girl} and   ${staff} teacher`);
  }
}
console.log("*********************************************");

const clg1 = new College("SGGS College", "Nanded");
clg1.addStudent("Bhagyshri");
clg1.addStudent("Aashu");

clg1.printStudentDetails();

console.log(clg1.listOfStudent);
