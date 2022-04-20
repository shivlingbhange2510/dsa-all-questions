// https://oj.masaischool.com/contest/2807/problem/01

// You are given n trees and their heights. Your task is to write a program that calculates the maximum number of trees whose height is in increasing order. They need not be in continuous manner.

// For instance, if heights of 9 trees are 10, 22, 9, 33, 21, 50, 41, 60, 80. The maximum number of trees whose height is in increasing order is 6 : (10, 22, 33, 50, 60, 80).


function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let test = (n = +input[0]);

    let line = 1;
    let arr = input[line].split(" ").map(Number);
    line++;
    var ans = 0;
    for (t = 0; t < test; t++) {
        ans = Math.max(ans, weight(arr, (idx = 0)));
    }
    console.log(ans);
}
function weight(arr, idx) {
    if (idx == arr.length) {
        return 0;
    }
    let ans = 1;

    for (let i = idx + 1; i < arr.length; i++) {
        if (arr[idx] <= arr[i]) {
            ans = Math.max(ans, 1 + weight(arr, i));
        }
    }
    return ans;
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
runProgram(`
9
10 22 9 33 21 50 41 60 80
`)