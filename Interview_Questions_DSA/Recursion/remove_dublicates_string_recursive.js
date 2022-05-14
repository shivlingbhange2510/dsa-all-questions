// you arec given a string remove the dublicates in string;
let a='ssss';

function check(s){
if(s== ""||s==" "){
    return("Empty string")
}
if(s.length==1){
    return(s)
}
    let res='';
    let n=s.length;
    for(let i=0;i<s.length;i++){
        if(i==0&&s[i]!=s[i+1]){
            res=res+s[i];
        }
        else if(i==(n-1)&&s[i]!=s[i-1]){
            res=res+s[i];
        }else if(s[i]!=s[i+1]&&s[i]!=s[i-1]){
            res=res+s[i];
        }

    }
    if(res==s){
        console.log('resss', res)
        return(res);
    }else{
        return(check(res));
    }
}

console.log('first', check(a))