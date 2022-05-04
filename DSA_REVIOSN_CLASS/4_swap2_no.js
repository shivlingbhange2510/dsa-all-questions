//  you are given 2 number swap them without using 3rd variable as well as Arthmatic operatons;

const swap2No = (num1, num2) => {
  console.log("before swaping : num1", num1, "num2", num2);
  num1 = num1 ^ num2;
  num2 = num1 ^ num2;
  num1 = num2 ^ num1;

  console.log("afte swaping : num1", num1, "num2", num2);
};
swap2No(10, 20);
