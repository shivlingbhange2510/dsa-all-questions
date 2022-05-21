// you are given 2d matrix find transpose of the matrix;
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  var transpose2dMatrix = function(a){
      let n= a.length;
      for(let i=0;i<n;i++){
          for (let j =1;j<n; j++){
             [ a[i][j], a[j][i] ] = [a[j][i], a[i][j]]
          }
      }
      console.log(a)
  }
  transpose2dMatrix(a)