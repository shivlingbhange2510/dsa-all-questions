// https://leetcode.com/problems/valid-parentheses/submissions/

var isValid = function (s) {
  let st = [];
  let n = s.length;
  if (n % 2 == 1) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      st.push(s[i]);
    } else {
      let top = st[st.length - 1];
      if (s[i] == ")" && top == "(") {
        st.pop();
      } else if (s[i] == "]" && top == "[") {
        st.pop();
      } else if (s[i] == "}" && top == "{") {
        st.pop();
      } else {
        return false;
      }
    }
  }

  let chek = false;
  if (st.length == 0) {
    check = true;
  } else {
    check = false;
  }
  if (check) {
    return true;
  } else {
    return false;
  }
};
