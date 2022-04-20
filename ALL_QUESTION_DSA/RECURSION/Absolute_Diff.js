function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = +input[line];
        line++;
        let a = input[line].split(" ").map(Number);
        line++;

        //   console.log(a, i)
        function absD(a, i) {
            if (i == a.length - 1) {
                return 0;
            }

            var sum = Math.abs(a[i + 1] - a[i]) + absD(a, i + 1);
            return sum;
        }
        console.log(absD(a, 0));
    }
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
runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
