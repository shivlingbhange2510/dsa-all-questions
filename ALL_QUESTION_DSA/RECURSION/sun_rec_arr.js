function sumA(i, a){
    if(i==a.length){
      return 0 ;
    }
    var sum=a[i] +sumA(i+1, a);
    sumA(i+1, a);
    return sum;
  }
  console.log(sumA(0,[1,2,3,4,5]))