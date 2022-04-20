function runProgram(input) {
    input = input.trim().split("\n");

    let [n, r] = input[0].split(" ").map(Number);

    function gp(n, r) {
        if (n == 0) {
            return 1;
        }
        let sum = 1 / Math.pow(r, n) + gp(n - 1, r);
        return sum;
    }
    console.log(gp(n, r).toFixed(4));
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
runProgram(`3 5`)