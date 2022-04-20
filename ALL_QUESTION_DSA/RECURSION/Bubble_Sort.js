function runProgram(input) {
    input=input.trim().split('\n');
 
     let n=+input[0];
     let a=input[1].split(' ').map(Number);
     
     function sortR(n=a.length, a){
         if(n==0){
             return a.join(' ') ;
         }
         
         for(j=0;j<n;j++){
             if(a[j]>a[j+1]){
                 [a[j], a[j+1]]=[a[j+1],a[j]];
             }
         }
        //  console.log('ss', sortR(n-1, a))

         
        return sortR(n-1, a)
     }
     console.log(sortR(a.length-1, a))
    
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });	
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  } 
  
 runProgram(`5
 3 5 0 9 8 10 5 6 89 3 23 1 98 65 23 25 6 3 90 101`)
                                                                                                                                               