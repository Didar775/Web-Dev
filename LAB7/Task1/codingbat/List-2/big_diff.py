n = int(input())
arr = list(map(int, input().split()))[:n]

arr.sort()

print(arr[len(arr)-1]-arr[0])