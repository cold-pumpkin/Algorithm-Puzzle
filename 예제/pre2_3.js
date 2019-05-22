/*
    Prctice 2.
    순열과 조합
*/

// 조합 (2) : nCr = n-1Cr-1 + n-1Cr
var memo = {};

function nCr(n, r) {
    if(memo[[n, r]])
        return memo[[n, r]];
    if((r == 0) || (n == r))
        return 1;
    return memo[[n, r]] = nCr(n - 1, r - 1) + nCr(n - 1, r);
}

console.log(nCr(10, 3));