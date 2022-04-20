function solve(subseq, str, idx) {
    if (idx == str.length) {
        console.log(subseq);
        return;
    }
    solve(subseq + str[idx], str, idx + 1);
    solve(subseq, str, idx + 1);
}
solve("", "abcd", 0);
