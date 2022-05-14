// you are given an array find the key which is occured at last position;

let a = [1, 3, 4, 5, 6, 6, 6, 6, 7, 12, 34, 49];
let x = k = -6;
const findHighKeyIndex = (a, k) => {
    
    let n = a.length;
    let low = 0,
        high = n - 1;
    //   let k = 7;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] == k) {
            ans = mid;
            low = mid + 1;
        } else if (k > a[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return (ans + 1);
};

const findLowFreEle = (a, k) => {
    let low = 0, n = a.length;
    high = n - 1;
    let ans = -1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] == k) {
            ans = mid + 1;
            high = mid - 1;
        } else if (k > a[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return (ans);
};
let y = findLowFreEle(a, k) !== -1 && findHighKeyIndex(a, k) !== -1 ? 
console.log(findHighKeyIndex(a, k) - findLowFreEle(a, k) + 1) : console.log(-1);