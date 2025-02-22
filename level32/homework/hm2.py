# გააკეთეთ Filter Even Numbers. მიზანი: გაფილტრეთ ყველა ლუწი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ

nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

even_numbers = []

for i in range(len(nums)):
    if nums[i] % 2 == 0:
        even_numbers.append(nums[i])

print(even_numbers)

