s = input()
k = ''

for i in s:
    if(i.isupper()):
        k+=i.lower()
    else:
        k+=i.upper()

print(k)