/*
Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps 
or 3 steps at a time.You have to count, how many possible ways Sandhya can run up to the stairs.
n=4, step=7;
1) 1,1,1,1 2)1,1,2 3)2,1,1, 4)1,2,1 5)1,3, 6)3,1 7) 2,2
 */


function getCount(n,count, track, start, step){
    // if()
    if(n==step){
        track++;
        console.log('track', track);
        return 1
    }
    if(step>n){
        return 0
    }
    return getCount(n, count, track, start+1, step+1) + getCount(n, count, track, start+2, step+1) + getCount(n, count, track, start+3, step+1)

    // getCount(n)
}

getCount(4,0,0,0,0)

function ways(i, n){
    if(i==n){
        return 1
    }
    if(i>n){
        return 0
    }
    return ways(i+1, n) + ways(i+2, n) + ways(i+3, n)
}

console.log("ways", ways(0, 4));
