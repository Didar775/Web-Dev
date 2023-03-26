a = [int(i) for i in input().split()]

for i in range(1, len(a),1):
    if (a[i] * a[i-1] > 0) :
        print(a[i-1],a[i])
        break
