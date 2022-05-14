//  tom and Nic are good friend Tom ask to Nic exactly n ruppees but nic has only 1 rupees in bank account
// Nic want to help his friend so he wrote 2 hacks  1st hack he can multiply muny by 10 , while second hack
//  he can multiply multiply money by 20 , this hack can be used any number of time ( many times this hack will be used )
//  can Nic helps to tom with this hack

// 1    ---> Yes
// 2    ---> No
// 10   ---> Yes
// 25   ---> No
// 200  ---> Yes

function helpsToNic(n, r) {
  if (n == r) {
    return true;
  }
  if (r > n) {
    return false;
  }
  let y = helpsToNic(n, r * 10) || helpsToNic(n, r * 20);
  return y;
}

if (helpsToNic(10, 12)) {
  console.log("yes");
} else {
  console.log("Noo");
}

