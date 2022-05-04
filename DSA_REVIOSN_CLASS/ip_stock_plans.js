// you are given stock sell array find consecative 
//  stock prices that are continuous less that every ith day.

// let a = [100, 80, 60, 70, 60, 75, 85];
let a=[6,2,5,4,5,1,6];

// for 75 left to [75, 60,70,60] so ans is 4
// let a=[6,2,5,4,5,1,6,]

const stock_plan = (a) => {
  let n = a.length;
  let st = [],
    ans = [];
  for (let i = 0; i < n; i++) {
    if (st.length == 0) {
      ans.push(-1);
    } else if (st.length > 0 && st[st.length - 1].val > a[i]) {
      ans.push(st[st.length - 1].idx);
    } else if (st.length > 0 && st[st.length - 1].val <= a[i]) {
      while (st.length > 0 && st[st.length - 1].val <= a[i]) {
        st.pop();
      }
      if (st.length == 0) {
        ans.push(-1);
      } else {
        ans.push(st[st.length - 1].idx);
      }
    }

    st.push({ val: a[i], idx: i });
  }
//   console.log('befire ')
  ans = ans.map((item, idx) => {
    return idx - item;
  });
  console.log("ans ", ans);
};

stock_plan(a)