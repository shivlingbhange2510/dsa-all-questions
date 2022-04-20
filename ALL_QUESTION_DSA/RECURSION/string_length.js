function runProgram(input) {
    input = input.trim().split("\n");

    let s = input[0];
    function lengthIs(s) {
        if (s == "") {
            return "";
        }

        return 1 + +lengthIs(s.substring(1));
    }
    console.log(lengthIs(s));
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
