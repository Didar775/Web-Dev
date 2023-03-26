x = input()

n = 0

for i in range(len(x)):

    n += int(x[i]) * 2**i

print(n)