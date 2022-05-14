// what is key when we use map list in react;

let a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let n=a.length;
let n2=a[0].length

for(let i=0;i<n;i++){
    let ar=[];
    for(let j=n2-1;j>=0;j--){
        let m=a[j][i];
        ar.push(m);
    }
}
//  [7,4,1],
//   [8,5,2],
//   [9,6,3]