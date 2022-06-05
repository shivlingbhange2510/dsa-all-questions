// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    return (check(num1, num2))
};
let in_op=`
Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 `

function check(a, b) {
    let n1 = a.length,
        f = [],
        n2 = b.length;
    let i = 0,
        j = 0;
    let c = 0;
    while (i < n1 || j < n2) {
        let x = a[n1 - i - 1];
        let y = b[n2 - j - 1];
        if (x && y) {
            let sum = +x + +y + c;
            if (sum >= 10) {
                let e = sum % 10;
                c = parseInt(sum / 10);
                f.push(e);
            } else {
                f.push(sum);
                c = 0;
            }
        } else if (x) {
            let sum = +x + c;
            if (sum == 10) {
                let e = sum % 10;
                c = parseInt(sum / 10);
                f.push(e);
            } else {
                f.push(sum);
                c = 0
            }
        } else if (y) {
            let sum = +y + c;
            if (sum == 10) {
                let e = sum % 10;
                c = parseInt(sum / 10);
                f.push(e);
            } else {
                f.push(sum);
                c = 0
            }
        }
        i++, j++;
    }
    if (c) {
        f.push(c)
    }
    return (f.reverse().join(""))
}