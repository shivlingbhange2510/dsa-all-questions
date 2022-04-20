class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head=null;
        this.size = 0;
    }
// https://oj.masaischool.com/contest/2632/problem/01
    hasCycle(){
        let obj={};
        let cur=head;
        while(cur!=null){
            if(obj[cur]==undefined){
                obj[cur]=1;
                cur=cur.next;
            }else{
                return true
            }
        }
        return false;
    }

}