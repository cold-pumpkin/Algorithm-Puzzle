'''
    01. 한 번에 결정하는 다수결 "가위 바위 보"
    
    가위 바위 보를 할 때 가장 많은 사람이 낸 손이 승리한다고 하자.
    100명의 사람이 있을 때, '한 번에 승리자가 결정될 수 있는 조합'은 몇 가지인지 구하시오.
'''


# Sol 1. 가장 많은 사람이 낸 손이 단 하나인 경우 카운트
#        * 두 가지 손을 낸 사람 수를 구하면, 다른 손을 낸 사람을 구할 수 있다.

N = 100
count = 0

for rock in range(0, N + 1):
    for scissors in range(0, N - rock +1):
        paper = N - rock - scissors
        check = [rock, scissors, paper]
        if check.count(max(check)) == 1:
            count += 1

print(count)