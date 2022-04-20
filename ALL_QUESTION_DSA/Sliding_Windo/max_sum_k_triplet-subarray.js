// https://oj.masaischool.com/contest/2527/problem/02
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
        // sum = sum - a[j - k];
        sum = sum + a[j]-a[j-k];
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

