
def productExceptSelf(nums):
    length = len(nums)
    output = [1] * length
  
    left = 1
    for i in range(length):
      output[i] = left
      left *= nums[i]
    right = 1
    for j in reversed(range(length )):
      output[j] *= right
      right *= nums[j]
    return output 

nums = [1, 2, 3, 4]
print(productExceptSelf(nums))

