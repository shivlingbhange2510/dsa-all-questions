// https://oj.masaischool.com/status/e49b5b400c49293a6ccb0f257fe1859b
// Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, Richard wrote a paper on encryption. Elliott then started writing his algorithms with the help of paper from Richard but he needs your help in implementing. The algorithm is like this:

// Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on. Take a look at the explanation of the sample test case for better understanding.

function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let n = +input[line];
        line++;
        let s = input[line];
        line++;
        //   console.log(n, s);

        function recS(s) {
            if (s == "") {
                return "";
            }
            if (s.length == 1) {
                return s;
            }
            let md = parseInt((s.length - 1) / 2);
            return s[md] + recS(s.slice(0, md)) + recS(s.slice(md + 1));
        }
        console.log(recS(s));
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
runProgram(`3
3
abc
4
abcd
11
abcdefghijk`)