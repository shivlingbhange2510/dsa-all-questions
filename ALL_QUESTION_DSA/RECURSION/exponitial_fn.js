function runProgram(input) {
    input = input.trim().split(" ");

    let x = +input[0];
    let n = +input[1];

    function recu(x, n) {
        if (n == 0) {
            return 1;
        }
        let a = 1 / fact(n);
        let b = power(x, n);
        return a * b + recu(x, n - 1);
    }
    console.log(recu(x, n).toFixed(4));
}
function fact(n) {
    if (n <= 1) {
        return 1;
    }

    return n * fact(n - 1);
}
function power(x, n) {
    if (n == 0) {
        return 1;
    }
    return x * power(x, n - 1);
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
