// https://oj.masaischool.com/contest/3944/problem/14
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
a=[[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]]
  function check(a,n){

    for(let i=0;i<parseInt(n/2);i++){
        for(let j=i; j<n-i-1;j++){
            let temp=a[i][j];

            a[i][j]=a[n-j-i][i];
            a[n-j-1][i]=a[n-i-1][[n-j-1]];
            a[n-i-1][n-j-1]=a[j][n-i-1]
            a[j][n-i-1]=temp;

            // a[i][j]=a[n-j-1][i];
            // a[n-j-1][i]=a[n-i-1][n-j-1];
            // a[n-i-1][n-j-1]=a[j][n-i-1];
            // a[j][n-i-1]=temp;

        }
    }
    console.log('aa', a)
  }
//   rotate by 90 degree cloclwise inside
// 1) take transpose of matrix;
// reverse row of matrix and print;
  check(a, 3)