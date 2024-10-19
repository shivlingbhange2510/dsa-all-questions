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
