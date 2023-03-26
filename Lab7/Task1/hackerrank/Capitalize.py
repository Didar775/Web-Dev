s = input()
arr = []
first, last = 0, 0
for i in range(len(s)):
    if(len(arr)==0 and s[i]==" "):
        arr.append(f"{s[first].upper()}{s[first+1:last]}")
        first = last
    elif(s[i]==" " and len(arr)!=0):
        arr.append(f"{s[first+1].upper()}{s[first+2:last]}")
        first = last
    elif(i == len(s)-1):
        arr.append(f"{s[first+1].upper()}{s[first+2:last+1]}")
    last+=1

for i in arr:
    print(i, end=" ")