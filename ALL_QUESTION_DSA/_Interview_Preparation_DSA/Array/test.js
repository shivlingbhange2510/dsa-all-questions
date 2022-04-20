
// https://oj.masaischool.com/contest/3139/problem/07
// find sum of 2 element is equal to target element k
// time complexcityIs O(n) 
// space complex O(1) didn't take any space 
function check(a, n, k) {
    let l = 0,
        r = n - 1,
        check = false;
    while (l < r) {
        let sum = a[l] + a[r];

        if (sum == k) {
            l++, r--;
            //  console.log('get target')
            check = true;
            break;
        }

        if (sum < k) {
            l++;
        } else {
            r--;
        }
    }
    if (check) {
        console.log(1);
    } else {
        console.log(-1);
    }
}
check([3,4,0,2,7], 5,2)