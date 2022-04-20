// https://oj.masaischool.com/status/b8a3df105bb398ba10c5a787b1054c4e

function runProgram(input) {
    input = input.trim().split(" ");
    //   input[line].split(' ').map(Number); line++;
    [i, j, n1] = input.map(Number);
    let answer = count_it((stepi = i), (stepj = j), (cur_move = 0), (n = n1));
    var moves = {};
    var final_answer = 0;

    for (var i = 0; i < answer.length; i++) {
        if (!(answer[i] in moves)) {
            final_answer++;
            moves[answer[i]] = 1;
        }
    }

    console.log(final_answer);
}
function count_it(stepi, stepj, cur_move, n) {
    if (cur_move > n) {
        return [];
    }

    if (stepi < 1 || stepj < 1 || stepi > 10 || stepj > 10) {
        return [];
    }

    if (cur_move == n) {
        return [[stepi, stepj]];
    }

    var answer = [];

    answer = answer.concat(count_it(stepi + 1, stepj + 2, cur_move + 1, n));
    answer = answer.concat(count_it(stepi + 1, stepj - 2, cur_move + 1, n));
    answer = answer.concat(count_it(stepi - 1, stepj + 2, cur_move + 1, n));
    answer = answer.concat(count_it(stepi - 1, stepj - 2, cur_move + 1, n));
    answer = answer.concat(count_it(stepi + 2, stepj + 1, cur_move + 1, n));
    answer = answer.concat(count_it(stepi + 2, stepj - 1, cur_move + 1, n));
    answer = answer.concat(count_it(stepi - 2, stepj + 1, cur_move + 1, n));
    answer = answer.concat(count_it(stepi - 2, stepj - 1, cur_move + 1, n));

    return answer;
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
