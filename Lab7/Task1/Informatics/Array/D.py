a = input().split()

for i in range(1,len(a),1):
    if(int(a[i] > a[i-1])):
        print(a[i], end=' ')
