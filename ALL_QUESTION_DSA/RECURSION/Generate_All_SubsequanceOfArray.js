let obj2=[];
function sub_array(i, t, array, obj) {
    if (i === array.length) {
        if(t.length!=0){
            result.push(t);
            if(obj2[t]==undefined){
                obj2[t]=1
            }
        }
     
        // if(obj[t]==undefined){
        //     obj[t]=1;
        // }
    
        return;
    }
       sub_array(i + 1, t, array, obj);
      
     sub_array(i + 1, t.concat([array[i]]), array, obj);
 
  
}
var obj={};
var result = [];
 sub_array(0, [], [1,2,2]);
 console.log(obj2)
// return result;
// console.log(result.sort())
// // console.log(obj)
// for(k in result){
//     if(obj[result[k]]==undefined){
//         obj[result[k]]=1
//     }
// }
// // console.log(obj)
// for( k in obj){
//     console.log(k)
// }