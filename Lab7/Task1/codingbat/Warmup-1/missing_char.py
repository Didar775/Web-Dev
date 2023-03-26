def missing_char(str, n):
  front = str[:n] 
  back = str[n+1:]  
  return front + back

s = input()
n = int(input())
print(missing_char(s, n))