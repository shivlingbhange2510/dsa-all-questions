// https://leetcode.com/problems/sort-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    let a=[];
    let cur=head;
    while(cur){
        a.push(cur.val)
        cur=cur.next;
    }
    a=a.sort((a,b)=>a-b);
    let cur2=head;
    let i=0;
    while(cur2){
        cur2.val=a[i];
        cur2=cur2.next;
        i++;
    }
    return(head)
};