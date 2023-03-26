n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()

arr = student_marks.get(query_name)

cnt=0

for i in arr:
    cnt+=i

print(format(cnt/len(arr), ".2f"))