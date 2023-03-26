n = int(input())

def even(n):
    if (n%2 == 0):
        return True
    return False
    
if(even(n) == False):
    print("Weird")
elif(even(n) == True) and n in range(2,6):
    print("Not Weird")
elif(even(n) == True and n in range(6, 21)):
    print("Weird")
elif(n > 20 and even(n==True)):
    print("Not Weird")

