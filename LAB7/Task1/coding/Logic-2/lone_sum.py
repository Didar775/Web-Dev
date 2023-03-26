a, b, c = map(int, input().split())

if(a==b==c):
    print(0)
elif(a==c):
    print(b)
elif(a==b):
    print(c)
elif(b==c):
    print(a)
else:
    print(a+b+c)
