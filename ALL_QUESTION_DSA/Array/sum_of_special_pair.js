// You are given an arrayAofNintegers.

// Write a program to find thesumof the absolute difference between all such pairs
// (A[i], A[j]) such that i < j and ( j-i ) is prime.

// i<j i=1j=i+1;
// j-i == prime ;
let a = [1, 2, 3, 5, 7, 12];
function check(a) {
    
let n = a.length;
let sum = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        let num = j - i;
        num = Math.abs(num);
        if (checkPrime(num) && i < j) {
            // console.log(i, j, 'kkk')
            let new_num = a[i] - a[j];
            new_num = Math.abs(new_num);
            sum = sum + new_num;
        }
    }
}
console.log(sum);
}

function checkPrime(num) {
    let count = 0;
    if (num == 1) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count >= 2) {
        return false;
    } else {
        return true;
    }
}

// function checkPrime(num){
//     let count=0;

//     for(let i=2;i<=num;i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count>2){
//         console.log(false)
//     }else{
//         console.log(true)
//     }
// }
// console.log(checkPrime(6));
