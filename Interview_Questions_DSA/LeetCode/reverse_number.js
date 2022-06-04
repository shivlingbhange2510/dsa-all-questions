// https://leetcode.com/problems/reverse-integer/submissions/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let check = x<0;
    let temp=Math.abs(x);
    let sum=0;
    while(temp>0){
        let rem=temp%10;
        sum=sum*10 + rem;
        temp=parseInt(temp/10);
    }
        return sum > 0x7FFFFFFF ? 0 : check ? -sum : sum;
};