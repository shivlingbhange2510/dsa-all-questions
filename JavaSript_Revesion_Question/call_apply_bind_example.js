let obj={
    name:'raj',
    age:30,
}
//  Bind method 
var test = {
    name: "shivling",
    age: 22,
    details: function (a) {
      function check(d) {
        console.log("Bind methods : \nthis", this.name, "degree is ", d, "number is ", a);
      }
      // let x = check.bind(obj, "Electronics");
      let x=check.bind(obj, "B.Com")
      x();
      return(this.age);
    },
  };
  console.log( test.details(10));

// apply methods

var test = {
  name: "shivling",
  age: 22,
  details: function (a) {
    function check(d) {
      console.log("apply methods : \nthis", this.name, "degree is ", d, "number is ", a);
    }
    // let x = check.bind(obj, "Electronics");
    let x=check.apply(obj, ["B.tech"])
    // x();
    return(this.age);
  },
};
console.log( test.details(10));
// in this above example make return function but this function is didn't able to accepts parameter
// test obj bcs inside function this keyword pinting to Global object thats window.
// for bind value of test obect with function check we have to bind object with check function;

// CALL METHOD;
//  called method is same as bind only deferrent is call method return value of function where bind method 
// return other function ;



var test = {
    name: "shivling",
    age: 22,
    details: function (a) {
      function check(d) {
        console.log("calld method : '\nthis", this.name, "degree is ", d, "number is ", a);
      }
      // let x = check.bind(obj, "Electronics");
      let x=check.call(obj, "Architecture")
      // x();
      return(this.age);
    },
  };
  console.log( test.details(10));

// apply method is same only deferrent is it accepts arguments as array of parameter

