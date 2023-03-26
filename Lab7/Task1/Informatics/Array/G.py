a = [int(i) for i in input().split()]


index = 0

for i in range(1,len(a)):
    if (a[i] > a[i-1]):
        index = i

print(a[index],index)
