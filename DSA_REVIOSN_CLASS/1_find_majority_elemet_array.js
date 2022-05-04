// you are given array find majority elemet of array majority element is a[n]/2 of any one elemet
// if frequancy of (a[i]) is greater than  >= n/2+1
let a = [3, 3, 4, 2, 4, 4, 2, 4, 4];
// x=[3,3,4,2,4,4,2,4]  no majority elements present
// a) brute: TC:O(n^2), sp=O(1) b) with sorting aproach TC=n*log(n) sp=O(1) if ingore merge sort space
// c) hashMap TC=O(n), sp=O(n)   d) Moore's Voting Algorith TC=O(n), sp=O(1);
let n = a.length;
// moon voting algorithm
const mvAlgo = (a) => {
  let maj_index = 0,
    count = 1;
  for (let i = 1; i < n; i++) {
    if (a[i] == a[maj_index]) {
      count++;
    } else {
      count--;
    }

    if (count == 0) {
      maj_index = i;
      count=1;
    }
  }
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (a[maj_index] == a[i]) {
      count2++;
    }
  }
//   console.log('MVA', count2)
  if (count2 >= parseInt(n/2 + 1)) {
    console.log("majority elemet is: ", a[maj_index]);
  } else {
    console.log('Moore"s, Voting Algorith no majaroti elemet is found ');
  }
};
const majority = (a) => {
  let maxCount = 0,
    result = -1;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (a[i] == a[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      result = a[i];
    }
  }
  if (maxCount >= parseInt(n / 2 + 1)) {
    return result;
  } else {
    return "no majority element present";
  }
};

const withSortArr = (a) => {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i <= parseInt(n / 2); i++) {
    if (a[i] == a[i + parseInt(n / 2)]) {
      return `2nd approach with sortting : ${a[i]}`;
    }
  }
  return "2nd aproch, no majority element present in array ";
};
const hashMap = (a) => {
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      let val = map.get(a[i]) + 1;
      map.set(a[i], val);
      if (val >= parseInt(n / 2 + 1)) {
        return "hashMap get target " + a[i];
      }
    }
  }
  // console.log('map', map)
  return "Hashmap dodn't has majority element";
};
mvAlgo(a)
console.log(hashMap(a));
console.log(withSortArr(a));
console.log(majority(a));
