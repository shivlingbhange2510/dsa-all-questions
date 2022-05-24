
let a=[
  
    [10,  20, 30, 40],
    [15,  35, 45, 60],
    [27,  29, 37, 48],
    [32,  33, 39,  50]
    ];
  let i=0, j=0;
  let n1=a.length-1, n2=a[0].length-1;
let t=39;
  while(i<=n&&i<=j){
    if(a[i][j]==t){
        console.log('get traget ', i, j)
        break;
    }
    if(a[i][j]<t){
        j++;
    }else{
        
    }
  }