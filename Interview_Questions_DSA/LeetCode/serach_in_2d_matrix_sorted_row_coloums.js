// https://leetcode.com/problems/search-a-2d-matrix-ii/
// find key in rowise sorted and columnswise sorted array with O(log(n)) time complexity
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let a = matrix, t = target;
    let i = 0, j = matrix[0].length - 1;
    let n = a.length - 1
    while (j >= 0 && i <= n) {
        if (a[i][j] == t) {
            return (`true`)
        }
        if (a[i][j] > t) {
            j--;
        } else if (a[i][j] < t) {
            i++;
        }
    }
    return (false)
};

let inp=`Input: matrix = [[1,4,7,11,15],
[2,5,8,12,19],
[3,6,9,16,22],
[10,13,14,17,24],
[18,21,23,26,30]],
 target = 20
Output: false
Input=[[1,3]];
t=3
op=true;
`