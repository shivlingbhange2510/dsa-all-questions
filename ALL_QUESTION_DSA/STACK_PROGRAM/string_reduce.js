// https://oj.masaischool.com/status/f4fe9a8d77529b38dd1026ec22c898d2

function runProgram(input) {
    input = input;
    a = input.split("");
    n = a.length;
    let s = [],
        top = -1;

    for (i = 0; i < n; i++) {
        if (s.length == 0) {
            s.push(a[i]);
        } else {
            let t = s[s.length - 1];

            if (t != a[i]) {
                s.push(a[i]);
            } else {
                s.pop();
            }
        }
    }

    console.log(s.length != 0 ? s.join("") : `Empty String`);
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
