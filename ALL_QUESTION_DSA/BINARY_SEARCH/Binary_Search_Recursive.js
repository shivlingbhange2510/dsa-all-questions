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
    if (arr[middle] > element) {
        return getTarget(low, middle - 1, target, arr);
    }

    return getTarget(middle + 1, high, target, arr);
}
