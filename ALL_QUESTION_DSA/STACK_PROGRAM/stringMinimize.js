let a='aaa';
a=a.split('')
n=a.length;
console.log('aa is ', a)
let s=[];
let n2=s.length;
console.log('len ',n2, s.length)
top=0;
for(i=1;i<n;i++){
  
    s.push(a[i-1]);
    if(a[i+1]==a[i-1]){
        s.pop()
    }
    top++;
    console.log('push ', s )
    // if(s[s.length-1]==a[i]){
    //     console.log('(s[s.length]==a[i] ',(s[s.length]==a[i]), i,s.length-1)
    //     s.pop();
    //     console.log('pop ', s)
    //     top--;
    // }
    
   
    
}
console.log('final ', s)
