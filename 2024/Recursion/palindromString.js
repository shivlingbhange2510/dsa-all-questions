function palindromString(str,  l, r){
    const first = str[l];
    const last = str[r];

if(first != last ){
    console.log('not palindrom string 1');
    return

}
if(l>r){
    console.log('palindrom string 2')
    return
}
palindromString(str,  l+1, r-1)
return
}
const str = 'nin1'
const n =str.length;
palindromString(str,0,n-1)

function palString2(str, l, r){

    if(l>r){
        return true
    }

    if(str[l]!=str[r]){
        return false
    }

    return palString2(str, l+1, r-1)
}

console.log("palString2", palString2(str, 0, n-1));