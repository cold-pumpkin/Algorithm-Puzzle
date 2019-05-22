/*
    Prctice 2.
    순열과 조합
*/

// 순열
function nPr(n, r) {
    var result = 1;
    for(var i = n - r + 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(nPr(10, 3));