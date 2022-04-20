function runProgram(input) {
    input=input.trim().split('\n');
  
  
     let test=+input[0];
    let line=1;
    for(t=0;t<test;t++){
        let s=[],g=[];
        check=true;
        let a= input[line].split('')
        let n=a.length;
        line++;
  
     for(i=0;i<n;i++){
  
         if(a[i]=='['||a[i]=='('||a[i]=='{'){
             s.push(a[i]);
         }else{
             if(s.length == 0){
                 check = false;
                 break;
             }
  
             let top=s.pop();
  
             if(a[i]=='}'){
                  if(top!='{'){
                     check=false
                     break;
                 }
              }
              if(a[i]==']'){
                  if(top!='['){
                     check=false
                     break;
                  }
              }
              if(a[i]==')'){
                  if(top!='('){
                     check=false
                     break;
                  }
              }
  
             }
     }
         if(s.length!=0){
             check = false;
         }
         if(check){
               console.log('balanced')
  
         }
         else{
             console.log('not balanced')
         }
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
 
 Ad by Valueimpression
 RAW Paste Data
 function runProgram(input) {
    input=input.trim().split('\n');
   
   
     let test=+input[0];
    let line=1;
    for(t=0;t<test;t++){
        let s=[],g=[];
        check=true;
        let a= input[line].split('')
        let n=a.length;
        line++;
 
     for(i=0;i<n;i++){
         
         if(a[i]=='['||a[i]=='('||a[i]=='{'){
             s.push(a[i]);
         }else{
             if(s.length == 0){
                 check = false;
                 break;
             }
             
             let top=s.pop();
             
             if(a[i]=='}'){
                  if(top!='{'){
                     check=false
                     break;
                 }
              }
              if(a[i]==']'){
                  if(top!='['){
                     check=false
                     break;
                  }
              }
              if(a[i]==')'){
                  if(top!='('){
                     check=false
                     break;
                  }
              }
     
             }
     }
         if(s.length!=0){
             check = false;
         }
         if(check){
               console.log('balanced')
 
         }
         else{
             console.log('not balanced')
         }
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

 