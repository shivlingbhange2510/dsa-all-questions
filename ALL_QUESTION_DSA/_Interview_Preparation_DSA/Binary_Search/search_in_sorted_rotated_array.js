function runProgram(input) {
    input = input.trim().split("\n");

    let line = 0;
    let [n, target] = input[line].split(" ").map(Number);
    line++;
    let a = input[line].trim().split(" ").map(Number);
    // line++;
    let h = [...a];
    let break_is= check(a,target)
    let arr_1 = h.slice(0, break_is);
    let arr_2 = h.slice(break_is, h.length);
    let f1 = findElement(arr_1, target);
    let f2 = findElement(arr_2, target);
    if (f1 != -1) {
        console.log(f1);
    } else if (f2 != -1) {
        console.log(arr_1.length + f2 - 1);
    } else {
        console.log(-1);
    }
    // console.log('f11 ', f1, '\n f22', f2)
}

function check(a, t) {
    let n = a.length;
    let low = 0;
    let high = n - 1;
    braekPoint = -1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (a[mid] > a[mid + 1]) {
            braekPoint = mid + 1;
            break;
        }
        if (a[mid] > t) {
            high = mid - 1;
        } else {
         
            low = mid + 1;
        }
    }
    return braekPoint;
}



function findElement(a, t) {
    let n = a.length;
    let low = 0;
    let high = n - 1;
    let ans = -1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] == t) {
            ans = mid + 1;
            break;
        }
        if (a[mid] > t) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
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

runProgram(`30 8
3 6 7 8 9 10 11 13 14 15 16 17 20 22 23 24 25 26 27 28 -9 -8 -7 -6 -5 -4 -3 -1 1 2`)