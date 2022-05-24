// console.log("first")
// 7
// number of ways you can arrange number
function check(n,idx, dp) {
  if(idx==0){
    return(1);
  }
  if(idx<0){
    return(0);
  }
  
  let k=check(n,idx-1, dp) + check(n,idx-2, dp) +check(n,idx-3, dp);
  return(dp[idx]=k)
  // body...
}
// let dp= new Array(n);
// console.log("KK", check(n, n, dp));

// var name='shivling';

// function check(p){
//   var name="raj";
//   console.log(name)
// }
// check();
// console.log("name : ", name)

// let a=[1,2,3];
// // a.prototype.xx=fu
// Array.prototype.myMap=function(x){
//   let u=[];
//   for(let i=0;i<x.length;i++){
//     u.push(x[i]);
//   }
//   return u;
// }
// a.prototype.myMap(a)
// console.log(a,a.prototype.toString())

let a=[1,2,4];
Array.prototype.myMap=function(){
  let a=this;
  // this;
  let x=[];
  for(let i=0;i<a.length;i++){
    x.push(a[i]);
  }
  // console.log("Result : ", x);
}
// console.log('first',a.myMap(a))

Array.prototype.myMap= function(callback){

  let result=[];
  for(let i=0;i<this.length;i++){
      result.push(callback(this[i], i, this));
      console.log("callback is : ", [i], i, this);
  }
  return(result);
}
let nn=[1,2,3];
let h=nn.myMap(function(val, idx, ar){
  return(val*2)
})

console.log("HH ", h)