let n = 5,
    arr = [];
for (let i = 0; i < n; i++) {
    let a = [1];
    for (let j = 1; j < i; j++) {
        a.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }
    if (i > 0) {
        a.push(1);
        console.log('aa', a)
    }
    arr.push(a);

    console.log(arr);
}
