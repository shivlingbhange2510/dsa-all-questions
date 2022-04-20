// https://oj.masaischool.com/status/df5ed7c65d8fb77717426bfb8b670a6a
function runProgram(input) {
    input = input.trim().split("\n");
    //   input[line].split(' ').map(Number); line++;

    [n, k] = input[0].split(" ").map(Number);
    a = input[1]?.split(" ").map(Number);
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
    // let f=Math.max(y);
    console.log(max);
}
// console.log( max_sum);

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

runProgram(`10 3
 -1 -1 -2 1 -2 4 1 9 3 9`);
