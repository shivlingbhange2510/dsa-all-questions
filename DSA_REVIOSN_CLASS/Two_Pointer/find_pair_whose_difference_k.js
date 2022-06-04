// https://oj.masaischool.com/contest/4034/problem/03
`You are given a sorted arrayAof sizeN, and another integerK
You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
If such a pair exists, printYes, else printNo`;
`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `
function check(a, n, k) {
    let i = 0,
      j = 1,
      count = 0;
    // 5 3  kk=1
    // 1 2 3 4 5
    while (i < n && j < n) {
      let dif = a[j] - a[i];
      if (dif == k) {
        //   return("Yes")
        // if(i!=j){
        count++;
        // }
        i++, j++;
      } else if (dif < k) {
        j++;
      } else {
        i++;
      }
    }
    if (count < 1) {
      return "No";
    } else {
      return "Yes";
    }
  }