function runProgram(input) {
    input=input.trim().split('\n');
 
     let n=+input[0];
     
    
    function fabS(n){
        if(n==1){
            return 1;
        }
        if(n==0){
            return 0;
        }
        let f= fabS(n-1)+fabS(n-2);
        return f
    }
    console.log(fabS(n))
    
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
 
 runProgram(`10`);
                                                                                                                                               