// Solve a financial problem
// Given a list of prices of a single stock for N number of days, find stock span for each day.
// Stock span is defined as a number of consecutive days prior to the current day when the price of a
// stock was less than or equal to the price at current day.

// https://oj.masaischool.com/contest/3899/problem/05
let a = [100, 60, 70, 65, 80, 85];
stockPeice(a)
function stockPeice(a) {

  let n = a.length;
  let st = [],
    ans = [];
  for (let i = 0; i < n; i++) {
    let top = st[st.length - 1];
    if (st.length == 0) {
      ans.push(-1);
    } else if (st.length > 0 && st[st.length - 1][0] > a[i]) {
      ans.push(st[st.length - 1][1]);
    } else if (st.length > 0 && st[st.length - 1][0] <= a[i]) {
      while (st.length > 0 && st[st.length - 1][0] <= a[i]) {
        st.pop();
      }
      if (st.length == 0) {
        ans.push(-1);
      } else {
        ans.push(st[st.length - 1][1]);
      }
    }
    st.push([a[i], i]);
  }
  let y = ans.map((item, idx) => {
    return idx - item;
  });
//   console.log("aaans", ans);

  console.log("Ans is : ", y);
}
