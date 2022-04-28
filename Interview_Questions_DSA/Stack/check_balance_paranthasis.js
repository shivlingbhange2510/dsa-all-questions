// https://leetcode.com/problems/valid-parentheses/submissions/

const balanceParanthasis = (ar) => {
  let st = [];
  let n = ar.length;
  let a = ar;
  for (let i = 0; i < n; i++) {
    // “[   (   ]   )”
    if (a[i] == "[" || a[i] == "(" || a[i] == "{") {
      st.push(a[i]);
    } else {
      let top = st[st.length - 1];
      if (a[i] == ")" && top == "(") {
        st.pop();
      } else if (a[i] == "]" && top == "[") {
        st.pop();
      } else if (a[i] == "}" && top == "{") {
        st.pop();
      } else {
        return `h not balanced`;
      }
    }
  }
  let check = false;
  if (st.length == 0) {
    check = true;
  }
  if(check){
      return `balanced`
  }else{
      return(`not balanced`)
  }
};
let s=`[()]{}{[()()]()}`;
s="[["
console.log(balanceParanthasis(s))