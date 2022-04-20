// https://oj.masaischool.com/contest/1837/problem/2
let max = -1;
function masaiPalSubString(S) {
    let s1 = S;
    let n = s1.length;
    for (let i = 0; i < n; i++) {
        str = "";
        for (let j = i; j < n; j++) {
            str = str + s1[j];
            check(str);
        }
    }
    console.log(max);
}

function check(s) {
    let n2 = s.length - 1;
    let l = 0;
    r = n2;
    let chek = true;
    while (l < r) {
        if (s[l] == s[r]) {
            l++, r--;
        } else {
            chek = false;
            break;
        }
    }
    if (chek) {
        let len = s.length;
        if (len > max) {
            max = len;
        }
    }
}

masaiPalSubString(`thisracecarisgood`);
