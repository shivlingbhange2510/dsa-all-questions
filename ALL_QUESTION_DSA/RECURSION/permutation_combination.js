// https://oj.masaischool.com/contest/2527/problem/01
function runProgram(input) {
    // input = input.trim().split("\n");
    let n = +input[0];
    let a = input[1].split(" ").map(Number),
        idx = 0;
    //   console.log(n, a)
    combination([1,2,3], idx, [],[]);
    // console.log('ttt', total)
}
// var total=[];
function combination(a, idx, ans, total = []) {
    if (idx >= a.length) {
        total.push(ans);
        console.log(ans.join(" "));
        return;
    }

    for (var i = 0; i < a.length; i++) { 
        if (!ans.includes(a[i])) {
            combination(a, idx + 1, [...ans, a[i]]);
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
