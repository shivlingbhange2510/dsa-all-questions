let t1=0, t2=1;
// 0,1,2,3,5,8,13,21,34,55,89.....
let x=[];
x.push(t1);
for(i=3;i<=50;i++){
  next_term=t1 + t2;
  t1=t2;
  t2=next_term;
  // console.log(next_term)
  x.push(next_term)
}
console.log(x.join(' '))
