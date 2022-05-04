function runProgram(input) {
    input = input.trim().split("\n");
    let line=0;
    let n=input[line];line++
    // console.log(input);
    let a = input[line].split(' ').map(Number); line++;
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


