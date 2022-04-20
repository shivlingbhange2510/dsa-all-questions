function runProgram(input) {
    input = input.trim().split("\n");

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let [n, k] = input[line].split(" ").map(Number);
        line++;
        let a = input[line].split(" ").map(Number);
        line++;
        target(a, n, k);
    }
}

function target(a, n, k) {
    let min = 100009,
        l = 0,
        r = 0,
        c_sum = a[0];
    while (l < n && r < n) {
        if (c_sum >= k) {
            if (r - l + 1 < min) {
                min = r - l + 1;
            }
            c_sum = c_sum - a[l];
            l++;
            if (l > r) {
                r = l;
                if (l < n) {
                    c_sum = a[l];
                }
            }
        } else {
            r++;
            c_sum += a[r];
        }
    }
    if (min == 100009) {
        console.log(-1);
    } else {
        console.log(min);
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
