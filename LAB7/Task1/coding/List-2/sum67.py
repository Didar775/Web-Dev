def sum67(arr):
    sum = 0
    ignore = False
    
    for num in arr:
        if num == 6:
            ignore = True
        elif num == 7 and ignore:
            ignore = False
        elif not ignore:
            sum += num
    
    return sum


n = int(input())
arr = list(map(int, input().split()))[:n]
print(sum67(arr))