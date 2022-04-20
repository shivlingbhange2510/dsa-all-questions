function checkElementBinarySearch(a, n, k) {
    let check = false;
    let low = 0;
    high = n - 1;

    while (low <= high) {
        let middle = low + parseInt((high - low) / 2);
        if (a[middle] == k) {
            check = true;
 
            break;
        }
        if (a[middle] < k) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    if (check) {
        console.log(1);
    } else {
        console.log(-1);
    }
}
checkElementBinarySearch([1, 3, 5, 8, 12, 16, 20], 7, 9);
