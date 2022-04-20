// https://oj.masaischool.com/status/104263402a1b0717435fbe520222ff07
// Alex is celebrating his birthday and wants to buy a few things for himself.

// There are n items present in the shop indexed from 1 to n. He wished he could buy everything but he has been instructed by his mother that he can buy exactly k items.

// Print all the various possible combinations of items he can buy.

// Make sure the combinations are sorted and distinct.

var x = [],
    str = [];
function runProgram(input) {
    input = input.trim().split(" ");

    let n = input[0];
    let k = input[1];
    let cur = "",
        p = "",
        count = 0;

    for (let o = 1; o <= n; o++) {
        str.push(o);
    }

    check((i = 0), str, (cur = ""), count, k);
}

function check(i, str, cur, count, k) {
    if (count == k) {
        console.log(cur.split("").join(" "));
        x.push(cur);
        return;
    }
    if (i == str.length) {
        return;
    }

    check(i + 1, str, cur + str[i], count + 1, k);
    check(i + 1, str, cur, count, k);
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
