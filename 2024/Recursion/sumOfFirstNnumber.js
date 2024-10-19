function sumOfFirstNnumber(num, sum){
    if(num<1){
        // console.log(sum);
        return sum
    }
    sumOfFirstNnumber(num-1, sum+num)
}

const x= sumOfFirstNnumber(3, 0);
console.log(x);