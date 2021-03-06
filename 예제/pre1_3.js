/*
    Prctice 2.
    패밀리 레스토랑에 가서, 여러 개의 테이블에 사람을 나누어 앉게 하려고 합니다. 
    이때, 한 사람만 앉는 테이블이 없게 그룹을 지어야 합니다.
    인원수를 나누는 패턴만 구하면 되며, 누가 어디에 앉는지 등은 고려하지 않아도 괜찮습니다.
    한 개의 테이블에 앉을 수 있는 사람은 최대 10명입니다. 
    100명이 하나 이상의 테이블에 나누어 앚는 패턴을 구하세요.
*/


// Sol 3. Dynamic Programming
    // * 반복문을 사용할 때, 한 번 사용한 계산 결과를 저장해 두고 활용

// 배치할 총 인원 수 (가로 축, 0 ~ M)
// 테이블당 인원 수 상한 (세로 축, 0 ~ N)
// 배치할 사람 수가 0일 때를 1로 설정해 두고, 배치할 사람 수가 2명 이상인 경우 테이블 상한에 따라
// 왼쪽과 위의 값을 더해서 반복


var M = 10;     // 테이블당 인원 수 상한 
var N = 100;    // 배치할 총 인원 수

// DP 테이블 생성
var dp = new Array(M + 1);
for (var i = 0; i <= M; i++)
    dp[i] = new Array(N + 1).fill(0);

// 배치할 사람 수가 0일 경우는 1로 설정
for (var i = 0; i <= M; i++)
    dp[i][0] = 1;

for (var i = 1; i <= M; i++) {
    for (var j = 2; j <= N; j++) {
        // 배치할 사람 수가 1인 경우는 0으로 남겨두고 
        // 총 인원 >= 테이블당 인원 수 상한인 경우
        if ((i >= 2) && (j >= i))
            dp[i][j] = dp[i][j - i];
        //
        if (i > 2)
            dp[i][j] += dp[i - 1][j];
    }
}

console.log(dp[M][N]);