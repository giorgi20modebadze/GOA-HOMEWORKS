#გააკეთეთ Sum Of Even Numbers. მიზანი: შეკრიბეთ ყველა ლუწი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

sum_of_even_numbers = 0

for i in range(len(nums)):
    if nums[i] % 2 == 0:
        sum_of_even_numbers = sum_of_even_numbers + nums[i]


print(sum_of_even_numbers)
        
        
        

