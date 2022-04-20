// https://oj.masaischool.com/status/b5610c0122eb125bfda670ad3a643ab2
// The University of Transylvania is conducting the coding fest for the Computer Programmers of the state. Again, because of his extraordinary managerial skills, Dracula is given the task to make arrangements for the competition.

// Dracula came to know that N people, are going to participate in the fest, and so he has the job of arranging them on N places for the fest. He gave an ID from 1 to N to each participant, and formulated a strategy to prevent plagiarism.

// He decided that all such permutations, in which the sum of IDs of participants, between two specific positions, L and R(L and R inclusive), are odd, need to be rejected. Find the total number of
//  permutations, that will have to be rejected, according to Dracula’s strategy.
function check(l, r, n, i, cur_arr) {
    if (i >= n) {
        let sum = 0;
        for (let p = l; p <= r; p++) {
            sum = sum + cur_arr[p];
        }
        if (sum % 2 == 1) {
            count++;
        }
        return;
    }

    for (let j = 1; j <= n; j++) {
        if (!cur_arr.includes(j)) {
            cur_arr.push(j);
            check(l, r, n, i + 1, cur_arr);
            cur_arr.pop();
        }
    }
}
check(0, 1, 3, 0, []);
console.log("ccc ", count);
