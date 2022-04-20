// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?
function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = +input[line];
        line++;
        //   console.log(n)
        if (nick(n)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
function nick(n) {
    if (n < 1) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }
    if (n % 20 == 0 && nick(n / 20)) {
        return 1;
    }
    if (n % 10 == 0 && nick(n / 10)) {
        return 1;
    }
    return 0;
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
