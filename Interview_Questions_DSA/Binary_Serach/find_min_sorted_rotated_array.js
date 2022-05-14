// you are given an array find minimum in sorted and rotated array;

let a = [6, 7, 8, 9, -1, 0];

const findMin = (a) => {
    let n = a.length;
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);

        if (a[mid] > a[high]) {
            low = mid + 1;
        } else if (a[mid] < a[high]) {
            high = mid;
        } else {
            high--;
        }
    }

    console.log("first", a[low]);
};
findMin(a)
