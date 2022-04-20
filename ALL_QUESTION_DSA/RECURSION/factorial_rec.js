function runProgram(input) {
    input = input.trim().split("\n");

    let n = +input[0];
    function fact(n) {
        if (n <= 1) {
            return 1;
        }

        return n * fact(n - 1);
    }
    console.log(fact(n));
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
runProgram(`5`)