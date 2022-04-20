// https://oj.masaischool.com/contest/3139/problem/04

// serach element in 2d sortedvarray 
function runProgram(input) {
    input = input.trim().split("\n");

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let [n, m] = input[line].split(" ").map(Number);
        line++;
        let x = [];
        for (let y = 0; y < n; y++) {
            let r = input[line].trim().split(" ").map(Number);
            line++;
            x.push(r);
        }
        let p = x.reduce((prev, cur) => {
            return prev.concat(cur);
        }, []);
        let find = input[line];
        line++;

        console.log(findElement(p, find));
    }
}

function findElement(a, t) {
    let n = a.length;
    let low = 0;
    let high = n - 1;
    let t2 = false;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] == t) {
            return !t2;
        }
        if (a[mid] < t) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
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
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16 
13
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16 
17`)