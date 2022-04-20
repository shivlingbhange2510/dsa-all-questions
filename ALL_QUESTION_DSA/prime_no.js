//prime no from 2 to 100;
let t=1, count=0;
for(k=1;k<=t;k++){
    if(t%k==0){
        count++;

    }
}
if(count<=2){
    console.log('prime ', t);
}
