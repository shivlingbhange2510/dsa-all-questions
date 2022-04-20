let total=0;
for(i=0;i<10;i++){
    if(i!==0&&i!==1){
        // console.log('num is ', i)
        let count=0, num=i;

        for(j=1;j<=num;j++){
            if(num%j==0){
                count++;
            }
        }
        if(count<=2){
            console.log('prime no ', num);
            total++;
        }
    }
}
console.log('total prime ', total)