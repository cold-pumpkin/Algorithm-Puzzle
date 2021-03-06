/*
    Practice 1.
    패밀리 레스토랑에 가서, 여러 개의 테이블에 사람을 나누어 앉게 하려고 합니다. 
    이때, 한 사람만 앉는 테이블이 없게 그룹을 지어야 합니다.
    인원수를 나누는 패턴만 구하면 되며, 누가 어디에 앉는지 등은 고려하지 않아도 괜찮습니다.
    한 개의 테이블에 앉을 수 있는 사람은 최대 10명입니다. 
    100명이 하나 이상의 테이블에 나누어 앚는 패턴을 구하세요.
*/


// Sol 2. 재귀함수 + Memoization 
                // * Memoization : 한 번 구한 결과를 저장하여 재사용 
var M = 10;
var N = 100;

var memo = {};
// (남은 사람 수, 이전 테이블에 배치한 사람 수)
function check(remain, pre) {
    // 이전에 계산한 적 있다면, 메모했던 값을 반환  
    if (memo[[remain, pre]])
        return memo[[remain, pre]];
    
    // 더 이상 배치할 사람이 없으면 종료
    if(remain < 0)
        return 0;
    else if (remain == 0)
        return 1;
    
    var cnt = 0;
    // 테이블에 배치할 사람 수(pre ~ M) 만큼 반복
    for(var i = pre; i <= M; i++) 
        cnt += check(remain - i, i);
    
    // 계산 결과를 메모하면서 반환
    return memo[[remain, pre]] = cnt;
}

// 한 사람만 앉는 테이블은 없음
console.log(check(N, 2));
