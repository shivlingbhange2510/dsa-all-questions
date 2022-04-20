function runProgram(input) {
    input = input.trim().split("\n");
    //  input.trim().split(' ').map(Number);

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        n = +input[line];
        line++;
        a = input[line].trim().split(" ").map(Number);
        line++;
        digit(n, a);
    }
}
function digit(n, a) {
    let sum = 0,
        v = [];

    for (i = 0; i < n; i++) {
        b = a[i].toString();
        (c = b.split("")), (sum = 0);
        for (u = 0; u < c.length; u++) {
            sum = sum + parseInt(c[u]);
        }
        v.push(sum);
    }
    console.log(v.join(" "));
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
