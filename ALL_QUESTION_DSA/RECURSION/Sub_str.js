// time complexcity (2^N)*N, 
// Space complexcity is (2^N)*N; --> it generate all sequence with 2^n and having length<N 
//  if some element is same then this formula tM an Sp
function backtack(s, cur){
    if(s==''){
        console.log(cur)
        return 
    }
    let cur_l=s[0];
    backtack(s.slice(1), cur + cur_l);
    backtack(s.slice(1), cur)
}

backtack('123', '')