function subStringIs(s, str){
    if(s.length==0){
        return str
    }
    subStringIs(s.substring(1), str + s[0])
     subStringIs(s.substring(1), str)
    
}
console.log(subStringIs(`abcd`, ''))