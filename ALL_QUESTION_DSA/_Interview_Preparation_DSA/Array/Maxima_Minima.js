function runProgram(input) {
    input = input.trim().split("\n");
    console.log(input);
    let test = +input[0];
    let line = 1;
    for (t = 0; t < 2; t++) {
        let n = +input[line];
        line++;
        let a = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(a, n);
        check(a,n)
    }
}

function check(a,n){
    // 5 3 1 2 5 1 2 -----> 1 3
    for(let i=1;i<n-1;i++){

        if(a[i-1]>a[i]&&a[i+1]>a[i]){
            console.log(`Max is ${a[i]}, index is : ${i} `)
        }
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
runProgram(`2
7
5 3 1 2 5 1 2
// 9
// 1 3 2 2 3 2 2 2 7
`)