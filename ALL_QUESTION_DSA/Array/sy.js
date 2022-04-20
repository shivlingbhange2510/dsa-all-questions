function runProgram(input) {
    input = input.trim().split("\n");
    console.log(input);
    let test=+input[0];
  let  line=1;
    for(t=0;t<test;t++){
        let n=+input[line]; line++;
        let x=[]
      
        for(p=0;p<n;p++){
            let a=input[line];
            b =a?.toString()
          c=b?.split('');
            // console.log(c, typeof c, 'type', n)
          
            // a=a.split('')
            // console.log('aa ',a)
            line++;
            x.push(c)

        }
         checkSy(x, n)
        // console.log('xx',x,n)
        // line++;
     
    }
 
}

function checkSy(x, n) {
let H=true, V=true;
    for(i=0 , p=n-1; i<n, p>=0;i++, p--){
        for(j=0;j<n;j++){
            d=x[i][j];
            e=x[p][j];
            if(d!=e){
                console.log('d', d, 'i,j', i,j )
                H=false;
                break;
            }

        }
        }
        // console.log('hh',H)
        // check VERTICAL
        for(g=0, c=n-1 ; g<n ,c>=0 ;g++, c--){
            for(y=0;y<n;y++){
                // console.log('yy ii',i)
                r=x[y][g];
                // console.log('rr',r)
                 s=x[c][g];
                // console.log('ss',r)
                if(r!=s){
                    V=false;
                    // console.log(r,s,'i j', g,y, 'j',y)
                   break;
                }
            }
           
        }
        //  console.log('vv', V)
console.log(H,V)

  if(!H&&!V){
      console.log('NO')
  }else if(!H&&V){
      console.log('Vertical')
  }else if(H&&!V){
      console.log('HORIZONTAL');
  } if(H&&V) {
      console.log('BOTHH')
  }
}
//  [    [1,1], 
//       [1,2]            ]
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

// runProgram(`1
// 3
// 101
// 000
// 101
// `);
runProgram(`5
2
11
11
4
0101
0110
0110
0101
4
1001
0000
0000
1001
5
01110
01010
10001
01010
01110
5
00100
01010
10001
01010
01110`)
