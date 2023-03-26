def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

n = int(input())
nums = list(map(int, input().split()))

print(array123(nums))