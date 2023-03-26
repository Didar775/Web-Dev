n = int(input())
s = set()
arr = list(map(int, input().split()))[:n]


for i in arr:
    s.add(i)

arr = list(s)

print(sum(arr)/len(arr))