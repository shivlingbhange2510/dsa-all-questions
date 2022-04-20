function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 0;
    for (t = 0; t < input.length; t++) {
        let cur = +input[line];
        line++;
        console.log(divideNo(cur));
    }
}
function divideNo(cur) {
    if (cur <= 0) {
        return 0;
    }
    let x = cur;
    x = Math.max(x, divideNo(parseInt(cur / 2)) + divideNo(parseInt(cur / 3)) + divideNo(parseInt(cur / 4)));

    return x;
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
runProgram(`12
2`)
// ans 13
// 2