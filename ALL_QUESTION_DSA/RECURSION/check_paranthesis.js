// https://oj.masaischool.com/status/4bd1eacb5e888d6126f83216e5b498a5;
//  you are given numberyou have to cretaed all posible parnthesis of length
// 2n and print only those who are balance
function runProgram(input) {
    input = input.trim().split("\n");

    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = input[line];
        line++;
        (n = 2 * n), (ans = []);
        getAll(n, "", ans);
        console.log(ans.length);
        ans.sort();
        for (i = 0; i < ans.length; i++) {
            console.log(ans[i]);
        }
    }
}
function getAll(n, cur, all_s) {
    if (n == 0) {
        // console.log('cc ', cur)
        if (checkValid(cur)) {
            all_s.push(cur);
        }
        return;
    }
    getAll(n - 1, cur + "(", all_s);
    getAll(n - 1, cur + ")", all_s);
}

function checkValid(s) {
    let stack = [];
    for (i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0;
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
  2`);
