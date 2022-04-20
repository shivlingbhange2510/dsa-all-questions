function runProgram(input) {
    input = input.trim().split("\n");
    //   input[line].split(' ').map(Number); line++;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let x = input[line].split(" ").map(Number);
        line++;
        let a = input[line].split(" ").map(Number);
        let n = x[0],
            t = x[1];
        checkTarget(n, t, a);
        line++;
    }
}
function checkTarget(n, t, a) {
    let l = 0;
    (r = a.length - 1), (g = false);
    while (l < r) {
        let sum = a[l] + a[r];
        if (sum == t) {
            console.log(l,r);
            g = true;
            l++, r++;
            break;
        } else if (sum > t) {
            r--;
        } else {
            l++;
        }
    }
    
    if(g==false){
        console.log(-1,-1)
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
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`)