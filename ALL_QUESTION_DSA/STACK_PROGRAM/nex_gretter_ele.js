// next gretter element
var arr = [11, 13, 21, 3];
var n = arr.length, s=[];
s.push(arr[0])

for(i=1;i<n;i++){
    
    if(s.length==0){
        s.push(arr[i]);
        continue;
    }else{

    while((s.length==0)==false&&s[s.length-1]<arr[i]){
        console.log('s[s.length-1] ',s[s.length-1], 'arr[i]', arr[i],'s.pop() ')
        s.pop();

    }
    s.push(arr[i]);

    while(s.length!=0){
        console.log('s[s.length-1] ', s[s.length-1],'--->##',-1);
        s.pop()

    }
}