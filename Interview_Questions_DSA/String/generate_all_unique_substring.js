

const generateSubstring=(s)=>{
    let map = new Map();
    let n=s.length;
    for(let i=0;i<n;i++){
        let str='';
        for(let j=i;j<n;j++){
           
            str=str+s[j];
            console.log(str)
            if(!map.has(str)){
                map.set(str, Math.random())
            }
        }
    }
    console.log('first', map)
}
let s='ababa';
generateSubstring(s)