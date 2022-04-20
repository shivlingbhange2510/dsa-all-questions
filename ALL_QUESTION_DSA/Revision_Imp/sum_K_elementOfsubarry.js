// https://oj.masaischool.com/status/febb5abf8ad0bda46f7ad96ef99e322c
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// `10 3           op=21
// -1 -1 -2 1 -2 4 1 9 3 9`


function runProgram(input) {
    input = input.trim().split("\n");


    [n, k] = input[0].split(" ").map(Number);
    a = input[1].split(" ").map(Number);
    // let max_sum = Number.NEGATIVE_INFINITY;
    let max = 0,
        y;
    let sum = 0;
    for (i = 0; i < k; i++) {
        sum = sum + a[i];
    }
    max = Math.max(sum, max);
    for (j = k; j < n; j++) {
        sum = sum - a[j - k];
        sum = sum + a[j];
        max = Math.max(max, sum);
    }
    
    console.log(max);
}


if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}



// SECOND METHOD



// find max sum of K consiquences elemet and print it;
var a = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// i=0; j=k;
let k = 3,
    n = 10;

let max_sum = Number.NEGATIVE_INFINITY;

for (i = 0; i <= n - k; i++) {
    var x = [];
        sum = 0;
    for (j = i; j < i + k; j++) {
        x.push(a[j]);
    }
    //  console.log('xx',x)
    for (g = 0; g < k; g++) {
        sum = sum + x[g];
        if (sum > max_sum) {
            max_sum = sum;
        }
    }
    //maxSum('lllll',x);
    // console.log(sum)
}
console.log("max_sum", max_sum);

function maxSum(arr) {
    let sum = 0;
    for (g = 0; g < k; g++) {
        sum = sum + x[g];
        if (sum > max_sum) {
            max_sum = sum;
        }
    }
    //  console.log(sum)
}
// Sliding_Windo\sum_K_elementOfsubarry.js