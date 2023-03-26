x = int(input())
cnt = 1

for i in range(2,x+1):
    if (x%i == 0):
        cnt += 1
print(cnt)