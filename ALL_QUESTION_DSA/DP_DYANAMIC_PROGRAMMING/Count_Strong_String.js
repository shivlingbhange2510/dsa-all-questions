// https://oj.masaischool.com/status/ee90029871148b219bef83814b7b619c
// You are given n strings indexed from 1,2,..,n each having length not more than 10. A string is strong if the first and the last characters of the string is a vowel.
// You are very curious and so you have q queries each having two integers - start index and end index [si,ei].
// You have to answer the number of strings that are strong in that given interval for each query.
// time complexcity is O(n) or O(q)  q is no of query this is optimise solution
function runProgram(input) {
    input = input.trim().split("\n");

    //   input[line].split(' ').map(Number); line++;

    let n = +input[0],
        line = 1;

    let s = input[line];
    line++, (s = s.split(" "));
    let o = "aeioue";
    let n2 = s.length;
    let q = +input[line];
    line++;

    let y = 0,
        x = [],
        count = 0;
    x.push(count);
    for (let i = 0; i < n2; i++) {
        let f = s[i][0];
        let l = s[i][s[i].length - 1];

        if (o.includes(f) && o.includes(l)) {
            count++;
        }
        x.push(count);
    }

    for (let r = 0; r < q; r++) {
        let [l1, r1] = input[line].split(" ").map(Number);
        line++;

        console.log(x[r1] - x[l1 - 1]);
    }
    //   console.log(x)
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
aba suna oua tes aba
5
1 5
2 4
1 3
3 5
5 5`)
