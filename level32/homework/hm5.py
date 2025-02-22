#გააკეთეთ Filter Odd Numbers. მიზანი: გაფილტრეთ ყველრა კენტი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ


nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

odd_numbers = []

for i in range(len(nums)):
    if nums[i] % 2 != 0:
        odd_numbers.append(nums[i])

print(odd_numbers)
