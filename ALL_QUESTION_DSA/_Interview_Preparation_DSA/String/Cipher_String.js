// https://oj.masaischool.com/contest/3271/problem/03
function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = +input[line];
        line++;
        let s = input[line];
        line++;
        check2(s, n);
    }
}

function check2(a, n) {
    let count = 1,
        x = [];
    let s = "",
        f = "";
    for (let i = 0; i < n; i++) {
        if (a[i] == a[i + 1]) {
            count++;
            s = a[i + 1];
        } else {
            if (count == 1) {
                s = a[i];
            }
            // console.log(s+count);
            // x.push(s + count);
            f = f + s + count;
            (count = 1), (s = "");
            s = s + a[i + 1];
        }
    }

    console.log(x.join("").trim());
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
