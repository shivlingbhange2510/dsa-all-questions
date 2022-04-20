console.log('jj')
let a=[
    [1, 2,  3],
    [4, 5,  6],
    [7, 8,  9]
];
n=a.length-1;
var x=[];
for(i=0;i,n;i++){
    for(j=0;j<n;j++){
        if(i==0||i==n-1||j==0||j==n-1){
             y=a[j][x];
            x.push(y)
        }
    }
}
console.log('hi')
console.log( x)