n = int(input())
arr = list(map(int, input().split()))[:n]

cnt = 0
for i in arr:
    if(i%2==0):
        cnt+=1

print(cnt)