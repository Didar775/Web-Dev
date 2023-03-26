def array_count9(nums):
  count = 0
  for num in nums:
    if num == 9:
      count = count + 1
  return count

n = int(input())
nums = list(map(int, input().split()))

print(array_count9(nums))