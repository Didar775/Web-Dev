def Xor(a):
    return  a[0] or a[1]

a = [int(i) for i in input().split()]

print(Xor(a))