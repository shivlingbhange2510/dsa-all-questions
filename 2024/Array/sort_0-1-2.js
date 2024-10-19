// // you have given array  conatin 0,1,2 numbers, sort Array withot using sort method
// let ar = [0, 2, 1, 0, 2]; // [0,0,1,2,2]
// const n= ar.length;
// let l=0, r=n-1; m=parent(n/2);
// let mid=1;

// while(l<r){
//     while(ar[l]==0){
//         l++
//     }
//     while(ar[r]==2){
//         r--;
//     }
//     if(ar[r]==0){
//         ar[l]=ar[r];
//         l++, r--

//     }
//     if(ar[l]==2){
//         ar[r]=ar[l];
//         l++, r--
//     }
//     if(ar[l]==0){
//         l++;
//     }else if(ar[r]==2){
//         r--;
//     }
// }

let obj = {
    name:'Aashu',
    no: 705478,
    city: 'Gonda',
    getData:function(gender, age){
        return `my name is ${this.name} I am from ${this.city}, I am ${gender},age is ${age}`
    }
}
let obj2 = {
    name:'Aashu',
    no: 705478,
    city: 'Gonda'
}

let x= obj.getData.apply(obj2, ['Male', 30]);
console.log(" x is ", x);