// https://oj.masaischool.com/contest/4095/problem/05
let input=`2
6
aabbcc
5
aabcd`
let op=`possible
not possible`
function detectPalII(N, string) {
    //write code here
    let n = N, a = string;
    let obj = {};
    function h() {


        for (let i = 0; i < n; i++) {
            if (obj[a[i]] == undefined) {
                obj[a[i]] = 1;
            } else {
                obj[a[i]] += 1;
            }
        }

        let e = 0, o = 0;
        for (k in obj) {
            if (obj[k] % 2 == 0) {
                e++;
            } else {
                o++;
            }
        }
        if (n % 2 != 0) {
            if (o == 1) {
                return (`Possible!`)
            } else {
                return ("Not Possible!")
            }
        } else {
            for (k in obj) {
                if (obj[k] % 2 != 0) {
                    return (`Not Possible!`)
                }
            }
            return (`Possible!`)

        }
    }
    console.log(h())
}
