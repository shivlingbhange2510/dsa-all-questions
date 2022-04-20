function runProgram(input) {
    input = input.trim().split(" ");

    [n, k] = input;
    let n1 = n.split("");
    let sum = 0;
    for (i = 0; i < n1.length; i++) {
        sum = sum + +n1[i];
    }
    console.log(recure(sum * +k));
}
const digitSumis = (n) => {
    if (n <= 0) {
        return n;
    }
    return (n % 10) + digitSumis(parseInt(n / 10));
};

const recure = (n) => {
    if (n < 10) {
        return n;
    }
    return recure(digitSumis(n));
};
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
