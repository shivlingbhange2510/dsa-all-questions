// https://oj.masaischool.com/status/ef451f1cdbafcce42c1132b7adf2b4a4
// Piyush went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to 
// fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose
//  power is less than or equal to M(<=M). After each round, All the soldiers who are dead in previous round will
//  reborn.Such that in each round there will be N soldiers to fight. Count the number of soldiers that he can kill
//  in each round and total sum of their powers.
function runProgram(input) {
    input = input.trim().split("\n");

    let n = +input[0],
        line = 1,
        arr = [];
    for (let i = 0; i < n; i++) {
        let u = +input[line];
        line++;
        arr.push(u);
    }

    arr = arr.sort((a, b) => a - b);
    (sum = 0), (sum_arr = []);
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i];
        sum_arr.push(sum);
    }

    let query = +input[line];
    line++;
    for (let i = 0; i < query; i++) {
        let t = +input[line];
        line++;
        let l = 0,
            r = n - 1,
            ans = -1;
        while (l <= r) {
            let mid = l + parseInt((r - l) / 2);

            if (arr[mid] <= t) {
                l = mid + 1;
                ans = mid;
            } else {
                r = mid - 1;
            }
        }
        console.log(ans + 1, sum_arr[ans]);
    }
}
runProgram(`7
1 
2 
3 
4 
5 
6 
7
3
3
10
2`)