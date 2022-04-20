// https://oj.masaischool.com/status/f068f4bde31fd6c26c760818bb14abb6
// One day Virat challenges Rohit to build the tallest tower from a set of disks of different height and radius.
//  The tower can be built by stacking disks on top of each other. In order to put disk A on top of disk B, the radius and height of A must be strictly smaller than those of B.
// Help Rohit to win the challenge.

function doit(input) {
    let lines = input.split("\n");
    let t = parseInt(lines[0]);
    let line = 1;

    while (t--) {
        let n = parseInt(lines[line]);
        line++;

        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(lines[line].trim().split(" ").map(Number));
            line++;
        }
        arr.sort((a, b) => {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });

        let dp = new Array(n).fill(0);
        dp[0] = arr[0][1];

        for (let i = 1; i < n; i++) {
            dp[i] = arr[i][1];
            for (let j = 0; j < i; j++) {
                if (arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1]) {
                    dp[i] = Math.max(dp[i], dp[j] + arr[i][1]);
                }
            }
        }

        console.log(Math.max(...dp));
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    doit(read);
});
doit(`4
10 30 40 20`)