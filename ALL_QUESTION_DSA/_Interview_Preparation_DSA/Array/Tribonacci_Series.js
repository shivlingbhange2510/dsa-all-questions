// https://oj.masaischool.com/status/9f63cea21cd4a6ae6bf1c0ded0031033
// The Tribonacci sequence Tn is defined as follows:
// T0= 0, T1= 1, T2= 1, and Tn+3= Tn+ Tn+1+ Tn+2 for n >= 0.
// Givenn, return the value of Tn mod 10^9+7.



function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = +input[line];
        line++;

        check(n);
    }
}
function check(n) {
    let t0 = 0,
        t1 = 1,
        t2 = 1;
    var nthterm;
    if (n <= 2) {
        if (n == 0) {
            nthterm = 0;
        } else {
            nthterm = 1;
        }
    }
    for (let i = 3; i <= n; i++) {
        nthterm = t0 + t1 + t2;
        (t0 = t1), (t1 = t2), (t2 = nthterm);
    }
    console.log(nthterm);
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
