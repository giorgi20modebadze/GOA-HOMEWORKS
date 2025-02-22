# გააკეთეთ Sum Of Odd Numbers. მიზანი: შეკრიბეთ ყველა კენტი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ


nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Sum_Of_Odd_Numbers = 0

for i in range(len(nums)):
    if nums[i] % 2 != 0:
        Sum_Of_Odd_Numbers = Sum_Of_Odd_Numbers + nums[i]

print(Sum_Of_Odd_Numbers)
