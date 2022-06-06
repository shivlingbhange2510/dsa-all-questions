// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function CompareLists(llist1, llist2) {
    let cur1=llist1, cur2=llist2;
    while(cur1&&cur2){
        if(cur1.data!==cur2.data){
            return(0);
        }
        cur2=cur2.next, cur1=cur1.next;
    }
    if(cur1){
        return(0)
    }
    if(cur2){
        return(0)
    }
    return(1)
    
    }
    