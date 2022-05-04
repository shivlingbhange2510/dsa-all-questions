x={
    name:"maruti",
    model:'honda city',
};
const car2 ={
    name:"maruti",
    model:'Wagnaor',
    mileg: function (){
        function test(price){
            return(" after binding inside test car " + this.model + "has 25km/h mileg and price is " +price );
        }
        var bindFunction = test.call(x, 2000)
        console.log(test.bind(car2, 300)())
        console.log(" after binding outside test car " + this.model + "has 25km/h mileg" );
        console.log('after binding : ', bindFunction)
    }
}

console.log(car2.mileg())