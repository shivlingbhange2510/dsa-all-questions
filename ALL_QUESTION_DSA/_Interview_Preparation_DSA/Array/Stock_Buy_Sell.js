// https://takeuforward.org/data-structure/stock-buy-and-sell/
// buy using first approach time complexcityIs O(n) ans space complexcity is O(1);
const buyCellStock = (arr) => {
    let a = arr;
    // [7,1,5,3,6,4]
    let n = a.length,
        maxProfit = 0,
        minPrice = Number.POSITIVE_INFINITY;

    for (i = 0; i < n; i++) {
        minPrice = Math.min(minPrice, a[i]);
        maxProfit = Math.max(maxProfit, a[i] - minPrice);
    }
    console.log(maxProfit);
};
console.log(buyCellStock([7, 1, 5, 3, 6, 4])); 

//  using bruteforce approach time complexcity is O(n^2) and space complexcity is
const maxProfitStock = (price) => {
    let a = price;
    let n = a.length;
    // [7,1,5,3,6,4]
    let maxProfit = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        let buy = a[i];
        for (let j = i + 1; j < n; j++) {
            let sell = a[j];
            let profit = sell - buy;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    if (maxProfit <= 0) {
        maxProfit = 0;
    }
    console.log(maxProfit);
};
// maxProfitStock([7, 1, 5, 3, 6, 4]);
// maxProfitStock([7, 6, 4, 3, 1]);
