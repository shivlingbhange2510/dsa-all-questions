function printN(i, num){
    if(i>num){
        return 
    };

    console.log(i)
    printN(i=i+1, num)
}

printN(1,5)