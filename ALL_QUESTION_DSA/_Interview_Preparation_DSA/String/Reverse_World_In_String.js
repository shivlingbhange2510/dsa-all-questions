// https://takeuforward.org/data-structure/reverse-words-in-a-string/
// Reverse Words in a String
// this is optimize way of reverse the world in string 
// time complexcity O(n) bcs we have to visit once time to each charachter in string;
// space complexcity is O(n) it only take constant space
function reverseString(s) {
    // I love India
    let n = s.length;
    let l = 0,
        r = n;
    let temp = "",
        ans = "";

    while (l < r) {
        let char = s[l];
        if (char != " ") {
            temp = temp + char;
        } else if(char==" ") {
            if (ans != " ") {
                ans=temp + " " + ans;
            }else{
                ans=temp;
            }
            temp="";
        }
       
        l++;
    }
    if(temp!=''){
        if(ans != ""){
            ans=temp + " " + ans;
        }else{
            ans=temp;
        }
    }
    return ans
}
console.log(reverseString('I Love India'))
