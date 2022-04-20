function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let n = +input[0];
    let a;
    let line = 1;
    a = input[line].split(" ").map(Number);
    line++;
    a = a.sort((a, b) => a - b);
    let q = +input[line];
    line++;
    for (t = 0; t < q; t++) {
        let p = input[line];
        line++;
        // console.log(p)
        let ind = a.indexOf(p);
        let check = false,
            b;
        for (let i = ind; i <= n; i++) {
            if (a[i] > p) {
                // console.log(a[i]);
                b = a[i];
                check = true;
                break;
            }
        }
        if (check) {
            console.log(b);
        } else {
            console.log(-1);
        }
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
