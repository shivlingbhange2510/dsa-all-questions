// https://oj.masaischool.com/status/3292221f032d1b8434289fe00b4ee114

// You are given a sorted array consisting of N integers. You need to count to the number
//  of triplets such that the absolute difference between the maximum and minimum element of
//  the triplet should be less than or equal to K.
let a = [1, 2, 5, 9, 10, 15];

a = [-3, -2, -1, 0];
let n = a.length,
    k = 9,
    i = 0,
    j = 0,
    ans = 0;
// k=2
[n, k] = [4, 3];
a = [1, 2, 3, 4];
while (i < n) {
    while (j < n && a[j] - a[i] <= k) {
        console.log("a[j]-a[i]<=k", a[j] - a[i], "jj", a[i], a[j], "ii", i, a[i]);
        j++;
    }
    var m = j - i - 1;
    ans = ans + (m * (m - 1)) / 2;

    i++;
}
console.log("ans ", ans);
