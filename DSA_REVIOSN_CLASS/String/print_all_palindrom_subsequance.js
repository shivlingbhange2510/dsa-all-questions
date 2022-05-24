let s = "nitin";
function subSeq(s) {
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let s1 = "";
    for (let j = i; j < n; j++) {
      s1 = s1 + s[j];
      if (pali(s1)) {
        console.log("palindrom ", s1);
      }
    }
  }
}
function pali(s) {
  let n = s.length;

  for (let i = 0; i < parseInt(n / 2); i++) {
    if (s[i] != s[n - i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log('pp', pali('shihs'));
subSeq(s)