/*
    01. 한 번에 결정하는 다수결 "가위 바위 보"
    
    가위 바위 보를 할 때 가장 많은 사람이 낸 손이 승리한다고 하자.
    100명의 사람이 있을 때, '한 번에 승리자가 결정될 수 있는 조합'은 몇 가지인지 구하시오.
*/


// Sol 1. 가장 많은 사람이 낸 손이 단 하나인 경우 카운트
//        * 두 가지 손을 낸 사람 수를 구하면, 다른 손을 낸 사람을 구할 수 있다.
var N = 100;
var count = 0;

for(var rock = 0; rock <= N; rock++) {
    for(var scissors = 0; scissors <= N - rock; scissors++) {
        var paper = N - rock - scissors;
        // 가장 많은 사람이 낸 손이 하나이면 카운트
        var check = [rock, scissors, paper];
        var max = check.reduce((a, b) => Math.max(a, b));
        //var max = Math.max(...check);
        if(check.filter(cnt => cnt == max).length == 1)
            count++;
    }
}
console.log(count);