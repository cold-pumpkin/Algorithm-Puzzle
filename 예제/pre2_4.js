/*
    Prctice 2.
    순열과 조합
*/

// 조합 (3) : 점화식 nCr = nCr-1 * (n-r+1)/r, nC0 = 1

function nCr(n, r) {
    var result = 1;
    for(var i = 1; i <= r; i++)
        result = result * (n - i + 1) / i;
    return result;
}

console.log(nCr(10, 3));