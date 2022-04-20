function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let s = input[line];
        line++;
        console.log(check(s));
    }
}
function check(a) {
    let n = a.length;
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (a[i] == "(" || a[i] == "{" || a[i] == "[") {
            stack.push(a[i]);
        } else {
            let top = stack[stack.length - 1];
            // '['
            if (top == "("&&a[i]==')') {
                stack.pop();
            } else if (top == "[" &&a[i]==']') {
                stack.pop();
            } else if (top == "{"&&a[i]=='}') {
                stack.pop();
            } else {
                return `not balanced`;
            }
        }
    }

    if (stack.length == 0) {
        return `balanced`;
    } else {
        return `not balanced`;
    }
}
//  console.log(check(`()`))
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
