const anaGramString =(str1,str2)=>{
    let s1 = str1;
    let s2=str2;
    let n1=s1.length, n2=s2.length;
    let obj1={},obj2={};
    for(k in s1 ){
        if(obj1[s1[k]]==undefined){
            obj1[s1[k]]=1;
        }else{
            obj1[s1[k]]+=1;
        }
    }
    for(k2 in s2 ){
        if(obj2[s2[k2]]==undefined){
            obj2[s2[k2]]=1;
        }else{
            obj2[s2[k2]] +=1;

        }
    }
    console.log(obj2)
}

anaGramString('shiv', 'hivs')