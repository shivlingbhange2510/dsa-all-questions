var array = [{
    key: 'one',
    value: 1,
    key: 'one111',
   }, {
    key: 'two',
    value: 2
   }, {
    key: 'three',
    value: 3
   }];
  let y= array.reduce(function(obj, current) {
    obj[current.key] = current.value;
    return obj;
   }, {});
   console.log("first", y)
   
   let r= array.reduce((prev, cur)=>{
    prev[cur.key]=cur.value;
   return(
   prev
   )
 },{})
// 2nd approach object assign method
let objectAsign=array.reduce((obj, current) => Object.assign(obj, {
    [current.key]: current.value
   }), {});
   