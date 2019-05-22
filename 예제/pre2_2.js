/*
    Prctice 2.
    순열과 조합
*/

// 조합 (1) : nCr = n! / (r! * (n-r)!)
var memo = [1];
function factorial(n) {
    if(memo[n])
        return memo[n];
    return memo[n] = n * factorial(n - 1);
}

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(nCr(10, 3));