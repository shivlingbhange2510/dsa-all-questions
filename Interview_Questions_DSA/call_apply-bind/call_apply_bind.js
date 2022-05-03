//  model = 'mercedes';
const car ={
    name:"maruti",
    model:'Wagnaor',
    mileg: function (){
        function test(){
            console.log(" before binding test car " + this.model + "has 25km/h mileg" );
        }
        test()
        console.log(" before binding outside test car " + this.model + "has 25km/h mileg" );
    }
}
console.log(car.mileg()
)
// inside mileg method  test function we acces model (this.model) name but it gives undefined 
// bcs inside FNC this keyword pointing to golobal object (window)   so that .

//   to achieve same functionality like line no. 10 we have to bind test function to car object like below;
console.log('************************');
 x={
    name:"maruti",
    model:'honda city',
}

const car2 ={
    name:"maruti",
    model:'Wagnaor',
    mileg: function (){
        function test(price){
            return(" after binding inside test car " + this.model + "has 25km/h mileg and price is " +price );
        }
        var bindFunction = test.bind(x, 2000)
        console.log(test.bind(car, 300)())
        console.log(" after binding outside test car " + this.model + "has 25km/h mileg" );
        console.log('after binding : ', bindFunction())
    }
}

console.log(car2.mileg())
//  we can bind test function to other object outside of car object
//  in bind first argument is always object and 2nd onword is 
// function parameter if it has any parameter which we are bind to that function
