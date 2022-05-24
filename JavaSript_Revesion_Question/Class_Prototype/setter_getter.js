
class Person {
    constructor(firstname, lastname) {
this._firstname = firstname;
 this._lastname = lastname;
 }
 get firstname() {
 return this._firstname;
 }
 set firstname(name) {
 this._firstname = name;
 }
//  get lastname() {
//  return this._lastname;
//  }
//  set lastname(name) {
//  this._lastname = name;
//  }
}
let h= new Person("shiv", "bhange");
console.log('first', h)
h.firstname="raj";
console.log('2nd : ', h)