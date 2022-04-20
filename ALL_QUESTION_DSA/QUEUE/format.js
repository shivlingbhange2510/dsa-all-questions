function runProgram(input) {
    input = input.trim().split("\n");
    console.log(input);
    //   input[line].split(' ').map(Number); line++;
    let q = [],
        front = 0,
        rear = 0;

    let test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        let g = input[line].split(" ");
        line++;
        console.log(g, g[0], g[1]);
        if (q.length==0||g[0]== "E") {
                q.push([g[1],g[2]]);
                console.log("ggggg ", q);

                rear++;
           
        }else{
            for (i = 0; i < q.length; i++) {
                if (g.length > 0 && q[i][0] == g[1]) {
                    q.splice(rear, 0, [g[1], g[2]]);
                    console.log("splice is ", q);
                } else {
                    q.push([g[1], g[2]]);
                    rear++;
                }
            }
        }
    }
    console.log("ggggg ", q);
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
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`) 
