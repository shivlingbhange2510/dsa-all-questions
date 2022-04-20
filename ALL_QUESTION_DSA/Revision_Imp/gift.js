let a = `abadbc`;
class Queue {
    constructor(max_size) {
        this.q = [];
        this.f = 0;
        this.r = 0;
        this.max_size = 5005;
    }
    eq(x) {
        this.q[this.r] = x;
        this.r++;
    }
    dq() {
        var temp = this.q[this.f];
        this.f++;
        if (this.f == this.r) {
            (this.f = 0), (this.r = 0);
        }
        return temp;
    }
    is_empty() {
        return this.f == this.r;
    }
    get_front() {
        if (this.f == this.r) {
            return "-";
        }
        return this.q[this.f];
    }
}
s = a.split("");
n = a.length;
(count = {}), (ans = "");
 let q=new Queue();

function un(a) {
    // q = new Queue();
    for (i = 0; i < n; i++) {
        let char = s[i];
        if (!(char in count)) {
            count[char] = 1;
        } else {
            count[char]++;
        }
        q.eq(char);

        while (!q.is_empty()) {
            let f = q.get_front();
            if (count[f] == 1) {
                break;
            }
            q.dq();
           
        }
        if (q.is_empty()) {
            ans = ans + "#";
        } else {
            ans = ans + q.get_front();
        }
    }
    console.log(ans);
}
console.log(un(`abadbc`));
