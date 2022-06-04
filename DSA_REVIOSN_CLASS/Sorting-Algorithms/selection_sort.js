`// selction sort 
// selection first element and sort with any number which is less than this number 
// time complacity O(n^2)
//space complexcity O(1);
// selection sort doesnot maintai order of algorith this is drawback [12 18 17 6 46] sort modules value by 6 
`
let a=[10,78,45,1,0,-1];
a=['ae', 'p', 'f',   'g', "shivling", 'h', 'x', 'ab',  'j'];
a=[12,14,17,6,46]
function selectionSort(a){
    let n= a.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(a[i]%6>a[j]%6){
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a
}
console.log("Selection : ", selectionSort(a))