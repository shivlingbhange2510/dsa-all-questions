// function check (arr){
//     return arr.reduce((prev, cur)=>{
//         return(
//             prev.concat(Array.isArray(cur)?check(cur):cur))
//     }, [])
   
//   }
//   console.log(check([1,[1,2],[1,8],[[7]]]))
let p=[];
function check(arr){
    return arr.map((a,b)=>{
        return(
            console.log(a)
            // Array.isArray(a)?check(a):[...p,...a]
        )
    })
}
console.log(check([1,[1,2],[1,8],[[7]]]))