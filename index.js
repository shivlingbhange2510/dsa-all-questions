
// ****************create your own map method name is myMap*****************
Array.prototype.myMap= function(callback){

  let result=[];
  for(let i=0;i<this.length;i++){
      result.push(callback(this[i], i, this));
      console.log("callback is : ", [i], i, this);
  }
  return(result);
}
let nn=[1,2,3];
let he=nn.myMap(function(val, idx, ar){
  return(val*2)
})

console.log("HH ", he)

// ****************call apply bind for arrow function*****************
let obj={
  a:10,
}
const check=(x)=>{
  console.log(this.b)
  // op undefined
  console.log("sum = ", x + this.b)
  // op is NaN (undefined + 10== NaN)

}
// **************** variable hosting must seen this 2 examplet below  *****************
// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
// Initialize x in the global scope
let hh = true;

function hoist() {
  // Initialize hh in the function scope
  if (3 === 4) {
    let hh = false;
  }
  console.log(hh);
}

hoist();

// **************** undefined vs not defined *****************
//  when we defned anyb variable if we didn't declare it's value and console it it givrs undeined value
// undefined is a placeholder keep default value when deined any variable 

//  not defined : when we used any variable which is not deined in program or it is not in scope 
//  it gives undefined;

console.log(u, "here value of U is undefined");
var u=10 ; console.log("here value of U 10");
function xyz(x1){
    console.log(x1);
}
xyz(10)
// console.log(x1, "here value of x is NOT DEFINED" error: x1 is not defined)


let ob={
    name:"shiv"
}
let obj2={
    age:21
}
obj2.city="pune"
Object.assign(ob, obj2)
console.log("object1 ", ob, '\nobj2', obj2)

// 2) 
// a=['aa','bb', 'c'];

// dif between for of and for loop for 
// bewlow example for of print only 4 and ignore all 
// for loop print 3 times undefined
let a=[];
a[4]=4;

// console.log('aa0', a);
for(let i=0;i<a.length;i++){
//   console.log(a[i]);
}

for( let k in a){
  console.log("kk", a[k], k);
}

let a1=[1,2,3,4];

console.log(a1)
var arr4 = new Array(4);
arr4.push("shic")
a1=[];
console.log('first', a1.length, arr4)

// flat array;

var deeplyNested = [4,[5,6,[7,8],[[9]]]];
const flatten = deeplyNested.toString()
// .split(',').map(Number)
console.log(flatten);

class Employ{
    constructor(name){
        this.name=name;
        this.l=console.log;
    }
    print(){
        this.l(`Hi ${this.name}`)
    }
}
let e=new Employ("shiv");
e.print()

function X(name){
    this.name=name;
    this.age=22;
}
let p = new X("shiv");
 k= X("raj")
console.log('aa', p, p.name, '\nXX', k, this.name)
console.clear();

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

function Foo(){};
Foo.age=100;
console.log("F00 : ", Foo)
let y= new Foo();
y.name="dd"
console.log('y : ', y)

let t={
    name:"shiv",
    detail: function(){
        console.log(`my name ${this.name} `)
    }
}
let test= Object.create(t);
test.detail()

console.clear();
// **************************Chaining method in prototype************************

// Chaining and Chainable is a design methodology used to design object behaviors so that calls to object functions
// return references to self, or another object, providing access to additional function calls allowing the calling
// statement to chain together many calls without the need to reference the variable holding the object/s.

class Stud {
    constructor(){
        this.firstName=null;
        this.lastName=null;
       this.status=null;
       console.log("this is constructor :  ", this)
    }
   
    fullName(fname, lname){
      this.firstName=fname;
      this.lastName=lname;
    
      return(this);
    }
    passed(x){
      this.status= x;
        console.log("this is Method  :  ", this)
      return(this);
    }
      failed(){
      this.status="FAILED"; 
      return(this);
    }

    info(){
      console.log("The student name ", this.firstName, this.lastName,"get ", this.status );
      return(this);
    }
  }
  
  let x=new Stud();
  console.log("xx", x.fullName("Shivling", "bhange").passed("PASSED").info().failed().info());

console.clear();
