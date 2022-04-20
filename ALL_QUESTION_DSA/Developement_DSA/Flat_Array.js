let x=[[1],[2],[3,4,89],[[[78]]]];
// if array has more than 1 depth elementor any array flat we use this recursive solution
const flatArrayIS=(arr)=>{
    let a=arr;
   return a.reduce((prev,cur,ind,array)=>{
        return prev.concat(Array.isArray(cur) ? flatArrayIS(cur):cur)
    }, [])
}
console.log( flatArrayIS([[1],[2],[3,4,89],[[[999,[78]],90]],089]) )

// if array has only on depth then we can use this reduce and concanicate method for flatting the array
 x=[[1],2,[3],[4],[5]]
let b =x.reduce((prev,cur,inndex,array)=>{
    return prev.concat(cur);
},[])
console.log('bb ', b)

