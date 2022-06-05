// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    return (check(digits))
};
let input =`[9,9] ---> [1,0,0]
 [9] ---> [1,0]
let x=[1,2,3,4];
x=[9,9];
 x=[8,9,9,9];
 x=[9,9]
 x=[9]
 [1,0,0]
 [8,9,9,9] ----> [9,0,0,0]  getting : [1,9,0,0,0]
`
function check(a) {
    let n = a.length, f = [];
    a[n - 1] = a[n - 1] + 1;
    let c = 0;
    // console.log("arr : ", a)
    for (let i = n - 1; i >= 0; i--) {
        let ad = a[i] + c;
        if (ad == 10) {
            c = parseInt(ad / 10);

            let e = ad % 10;
            f.push(e);
        } else {
            f.push(ad)
            c = 0;
        }
    }
    if (c == 1) {
        f.push(c)
    }
    return (f.reverse())
}