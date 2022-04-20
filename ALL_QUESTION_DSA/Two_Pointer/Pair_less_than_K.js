// You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.
// Refer the sample test case for better understanding.
function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    //   console.log(input);
    let line = 1;
    for (i = 0; i < test; i++) {
        n = +input[line];
        line++;
        a = input[line].trim().split(" ").map(Number)
        line++;
         k = +input[line];
        line++;
        // console.log(n, k,a)
         checkDiff(n, k, a);
    }
}
function checkDiff(n, k, a) {
    let l = 0, max=-1
        count = 0,
        r = n-1;
    while (l < r) {
        sum=a[l]+a[r];
        if(sum<k){
            if(sum>max){
                max=sum;
            }
            l++;
        }
        else{
            r--;
        }
    }
    console.log(max)
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
runProgram(`9
5 7 5 1 7 3 3 2 1
5`)
// runProgram(`2
// 5
// 1 2 3 4 5
// 7
// 3
// 30 10 20
// 15`)

// ans 6, -1