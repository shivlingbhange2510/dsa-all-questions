function runProgram(input) {
    input=input.trim().split('\n');
 
     test=+input[0];
     line=1, s=[];
     for(i=0;i<test;i++){
         let a=input[line];
       
         if(a.length>2){
             b=a.split(' ')
          
             o=+b[0];
             ele=b[1]
         }else{
             o=+a[0];
         }
       
         if(+o==1){
             s.push(ele);
         }
         if(+o==2){
             s.pop();
         }
         if(+o==3){
             if(s.length>0){
                 let top= s[s.length-1];
                 console.log( top)
             }else{
                 console.log('Empty!')
             }
            
         }
         line++
        
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
 
 
                                                                                                                                               