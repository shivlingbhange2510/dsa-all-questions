let a = "pwwkew";
// a = "abcabcbb";
// "dvdf" op=3 getting 2
// op---->3 getting--->2
a="aab"

function max(a){
  let n=a.length;
  let max=-1;
  for(let i=0; i<n; i++){
    let obj=[],  count=0;
    for(let j=i+1; j< n; j++){
      if(obj[a[i]]==undefined){
        obj[a[i]]=1;
      }
    }
  }
}
function maxLen(a) {
let k=0;
  let obj = [],
    max = -1;
  let n2 = a.length;
  for (let i = 0; i < n2; i++) {
    if (obj[a[i]] == undefined) {
      obj[a[i]] = 1;
    } else {
       k = Object.keys(obj).length;
      if (k > max) {
        max = k;
      }

      obj = {};
      obj[a[i]] = 1;
    }
  }
   k = Object.keys(obj).length;

  if (k > max) {
    max = k;
  }
  console.log("mmm", max);
}
maxLen(a)