function runProgram(input) {
    input = input.trim().split("\n");

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let [n, m] = input[line].split(" ").map(Number);
        line++;
        let x = [];
        for (let y = 0; y < n; y++) {
            let r = input[line].trim().split(" ").map(Number);
            line++;
            x.push(r);
        }
        console.log('xx i ', x);
        let find = input[line];
        line++;
        console.log(find);
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
 4 4
 1 2 3 4
 5 6 7 8
 9 10 11 12
 13 14 15 16 
 13
 4 4
 1 2 3 4
 5 6 7 8
 9 10 11 12
 13 14 15 16 
 17`);
