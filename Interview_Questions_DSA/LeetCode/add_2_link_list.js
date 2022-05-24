// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let  head= new ListNode(0), carry=0;
    let cur=head;
    while(l1||l2){
        let sum=0;
        if(l1&&l2){
            sum=l1.val+l2.val+carry;
            l1=l1.next, l2=l2.next;
        }else if(l1){
            sum=sum+l1.val+carry;
            l1=l1.next
        }else if(l2){
            sum=sum+l2.val+carry;
            l2=l2.next;
        }
        if(sum>9){
            carry=parseInt(sum/10)
        }else{
            carry=0;
        }
        sum=sum%10;
        let temp= new ListNode(sum);
        cur.next=temp;
        cur=temp;
    }
    if(carry){
      cur.next= new ListNode(carry);
    }
    head=head.next;
    return(head)
};