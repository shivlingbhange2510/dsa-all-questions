//  apply method gives function  parameter as array;
const car = {
  name: "maruti",
  model: "honda city",
  mileg: function () {
    function test(price, owner) {
      console.log(
        "car is ",
        +this.name + "meleg is 25km/l price is " + price + "owner is " + owner
      );
    }
    test.apply(car, [200000, "shivling"]);
    console.log("car mode is ", this.model);
  },
};
car.mileg();
