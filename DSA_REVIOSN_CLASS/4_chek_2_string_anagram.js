// you are given 2 string check this 2 string are anagram or not;
// with bit manupulation time complexcity is O(n)   space complexcity is O(1)
let s1 = `shiv`,
  s2 = `livs`;
function anagramBitManupulation(s1, s2) {
  if (s1.length !== s2.length) {
    return `Not anagram string`;
  }
  let n = s1.length;
  let r = 0;
  for (let i = 0; i < n; i++) {
    r = r ^ s1.charCodeAt(i) ^ s2.charCodeAt(i);
  }
  console.log("val : ", r);
  if (r == 0) {
    return `anagram string`;
  } else {
    return `Not anagram string 2`;
  }
}

console.log(anagramBitManupulation(s1, s2));
