// you are given an number find the next powe of number;

function findNextPower2(num) {
  if (num && !(num & (num - 1 == 0))) {
    console.log(num * 2);
    return;
  }

  let count = 0;
  while (num > 0) {
    count++;
    num = parseInt(num / 2);

    // if(num)
  }
  return `next power is ${1 << count}`;
  // << shit operator shift count times to left by 1
}
console.log(findNextPower2(16));
