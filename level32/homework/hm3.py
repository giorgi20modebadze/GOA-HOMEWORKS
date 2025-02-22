# გააკეთეთ Find Maximum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მაქსიმუმი ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [546]

nums = [263, 714, 312, 694, 253, 476]

max_num = nums[0]

for i in nums:
    if i > max_num:
        max_num = i

print(max_num)
