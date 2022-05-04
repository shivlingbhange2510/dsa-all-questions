// console.log('hiii')
function Car(name, price){
    this.name = name;
    this.price = price;
    var getDetails=function(){
        console.log(`car name ${this.name} price ${this.price}`)
    }
    console.log('this', this)

}
let c1= new Car('maruti', 2000);
console.log('first',); c1.getDetails


let x={val:20}
let y=x;
x.val=100;
console.log('xx', x, 'yy',)
