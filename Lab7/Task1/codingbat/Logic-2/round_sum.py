def round10(num):
    if num % 10 >= 5:
        return num + (10 - (num % 10))
    else:
        return num - (num % 10)

def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)

a, b, c = map(int, input().split())
print(round_sum(a,b,c))