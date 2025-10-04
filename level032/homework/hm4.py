# გააკეთეთ Find Minimum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მინიმალური ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [1]

nums = [314, 849, 425, 869, 285, 163]

min_num = nums[0]

for i in nums:
    if i < min_num:
        min_num = i

print(min_num)
