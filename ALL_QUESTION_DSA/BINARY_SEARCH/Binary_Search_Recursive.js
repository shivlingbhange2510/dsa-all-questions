function getTarget(low, high, target, arr) {
    if (high >= low) {
        middle = low + parseInt((high - low) / 2);
    }
    if (low > high) {
        return -1;
    }
    if (arr[middle] == target) {
        return middle;
    }
    if (arr[middle] > target) {
        return getTarget(low, middle - 1, target, arr);
    }

    return getTarget(middle + 1, high, target, arr);
}
let a=[1,2,3,4,5,6];
let high = a.length - 1, target = 3,low=0;

console.log(getTarget(low, high,target,a))