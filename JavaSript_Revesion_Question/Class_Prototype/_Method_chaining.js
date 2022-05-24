// Chaining and Chainable is a design methodology used to design object behaviors so that calls to object functions
// return references to self, or another object, providing access to additional function calls allowing the calling
// statement to chain together many calls without the need to reference the variable holding the object/s.

// #)Objects that can be chained are said to be chainable. If you call an object chainable, you should ensure that all
// returned objects / primitives are of the correct type. It only takes one time for your chainable object to not return
// the correct reference (easy to forget to add return this) and the person using your API will lose trust and avoid
// chaining. Chainable objects should be all or nothing (not a chainable object even if parts are). An object should not
// be called chainable if only some of its functions are.

// Method chaining is a programming strategy that simplifies your code and beautifies it. Method chaining is done by
// ensuring that each method on an object returns the entire object, instead of returning a single element of that
// object. For example:


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


//    example 2)
function Door() {
 this.height = '';
 this.width = '';
 this.status = 'closed';
}
Door.prototype.open = function() {
    console.log("This : ", this)
 this.status = 'opened';
 return this;
}
Door.prototype.close = function() {
 this.status = 'closed'; 
 return this;
}
Door.prototype.setParams = function(width,height) {
 this.width = width;
 this.height = height;
 return this;
}
Door.prototype.doorStatus = function() {
    console.log("This 222 : ", this)
 console.log('The',this.width,'x',this.height,'Door is',this.status);
 return this;
}
var smallDoor = new Door();
smallDoor.setParams(20,100).open().doorStatus().close().doorStatus();

// Note that each method in Door.prototype returns this, which refers to the entire instance of that Door object.

// example no 3)
function Vec(x = 0, y = 0){
    this.x = x;
    this.y = y;
    // the new keyword implicitly implies the return type
    // as this and thus is chainable by default.
   }
   Vec.prototype = {
    add : function(vec){
        // console.log("VEC**", vec)
    this.x += vec.x;
    this.y += vec.y;
    return this; // return reference to self to allow chaining of function calls
    },
    scale : function(val){
    this.x *= val;
    this.y *= val;
    return this; // return reference to self to allow chaining of function calls
    },
    log :function(val){
    console.log(this.x + ' : ' + this.y);
    return this;
    },
    clone : function(){
    return new Vec(this.x,this.y);
    }
   }
   var vec = new Vec();
vec.add({x:10,y:10})
 .add({x:10,y:10})
 .log() // console output "20 : 20"
 .add({x:10,y:10})
 .scale(1/30)
 .log() // console output "1 : 1"
 .clone() // returns a new instance of the object
 .scale(2) // from which you can continue chaining
 .log()
