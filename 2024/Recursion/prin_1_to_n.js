// print name N times using recursion 

function printNameNTimes(n, name){
    if(n==0) return 
    console.log(name);
    printNameNTimes(n=n-1, name)
}

    
    printNameNTimes(5,'aashu')