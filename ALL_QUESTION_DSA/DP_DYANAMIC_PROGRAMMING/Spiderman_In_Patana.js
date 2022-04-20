function doit(input) {
    let lines = input.split("\n");
    let [n] = lines[0].trim().split(" ").map(Number);
    let building_heights = lines[1].trim().split(" ").map(Number);

    let dp_arraya_is = [];

    for (let i = 0; i <= n; i++) {
        dp_arraya_is.push(10000000009);
    }

    dp_arraya_is[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        for (let no_of_step = 1; no_of_step <= 2; no_of_step++) {
            if (i + no_of_step >= n) {
                break;
            }
            dp_arraya_is[i] = Math.min(dp_arraya_is[i], Math.abs(building_heights[i] - building_heights[i + no_of_step]) + dp_arraya_is[i + no_of_step]);
        }
    }

    console.log(dp_arraya_is[0]);
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
