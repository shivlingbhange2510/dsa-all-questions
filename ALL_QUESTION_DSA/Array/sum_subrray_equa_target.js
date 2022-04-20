function runProgram(input) {
    input=input.trim().split('\n');
    
  //   input[line].split(' ').map(Number); line++;
   
     let test=+input[0];
    let line=1;
    for(t=0;t<test;t++){
        let n=+input[line];line++;
        let a=input[line].split(' ').map(Number); line++;
     //   console.log(a, n);
        b=a.sort(function(a, b){
            return a-b;
        })
        max=b[n-1];
         subArray(n, a)
        
    }
    
  }
     function subArray(n, a, max){
         let find=true;
         for(i=0;i<n;i++){
             for(j=i+1;j<=i;j++){
                 
             }
         }
       
          if(find){
             console.log('Yes', i,j)
         }else{
             console.log('No',i, j)
         }
        
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
 runProgram(`3
 3
 1 2 3
 4
 0 1 2 3
 4
 2 3 6 10`)
 
                                                                                                                                               