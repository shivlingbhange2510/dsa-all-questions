// hash map is data structure it gives key value pair and we can 
// set any  value as key like object array in hashmap

class HasMap{
    constructor(size=0){

    }
}
let s='hiii';
const check=()=>{
    return s;
}
let map = new Map();
let a={'shiv':1}, b={'shiv':81};

map.set(a,'first');
map.set(b, 'second');
map.set(check, 'hii this is function')
map.set(7)
console.log('first', map)
map.delete({'shiv':8})
// console.log('2nd ----> ', map)
//  convert array to hashMap;
let ar= ['mangp', 'banana', 'orange', 'grapes'];

let mapIs = new Map(ar.map((item, ind)=>{
    return ([item, ind])
}));

console.log('first', mapIs.delete('banana'))
console.log('first', mapIs.size)