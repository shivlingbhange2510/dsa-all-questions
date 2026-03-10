let array = [10, 20, [90, [80],
    [30, [67, [90]]]
]]
const flatArray = (a, result) => {
    for (let i = 0; i < a.length; i++) {
        const item = a[i]
        if (Array.isArray(item)) {
            flatArray(item, result);
        } else {
            result.push(item);
        }
    }
    return result

}

console.log(flatArray(array, []));
