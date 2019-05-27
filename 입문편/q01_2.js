/*
    01. 한 번에 결정하는 다수결 "가위 바위 보"
    
    가위 바위 보를 할 때 가장 많은 사람이 낸 손이 승리한다고 하자.
    100명의 사람이 있을 때, '한 번에 승리자가 결정될 수 있는 조합'은 몇 가지인지 구하시오.
*/


// Sol 2. 사람(O)들 100명 사이에 칸막이(|)를 2개 놓아 구분할 수 있는 조합의 수
//  * 중복 조합 : "n가지 종류에서 중복을 허용해 r개를 선택하는 방법"
//              = "r개의 O와 n-1개의 칸막이를 일렬로 배열하는 방법"


N = 100;
var count = 0;

for(var l = 0; l <= N; l++) {       // 왼쪽 칸막이 위치
    for(var r = l; r <= N; r++) {   // 오른쪽 칸막이 위치
        var check = [l, r - l, N - r];  // 가위, 바위, 보 사람 수
        var max = Math.max.apply(null, check);
        if(check.filter(cnt => cnt == max).length == 1)
            count++;
    }
}

console.log(count);