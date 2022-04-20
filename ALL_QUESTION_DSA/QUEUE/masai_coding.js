function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input);
    //   input[line].split(' ').map(Number); line++;
    let q = [],
        no = false,
        front = 0,
        rear = 0;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let g = input[line].split(" ");
        line++;
        // console.log("yyy ", g);
        if (q.length == 0 && g[0] == "E") {
            q.push([g[1], g[2]]);
            // console.log('bb', q)

            rear++;
        } else {
            for (i = 0; i < q.length; i++) {
                if (q[i][0] == g[1]) {
                    // q.push(g[1]);
                    q.splice(i + 1, 0, [g[1], g[2]]);
                    // console.log( q);
                    no = true;
                    break;
                }
            }

            if (!no) {
                q.push([g[1], g[2]]);
                //  console.log( q);
            }
        }

        if (g[0] == "D") {
            let r = q[front];
            console.log(r.join(" "));
            front++;
        }
    }
    // console.log("sex  ", q);
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
