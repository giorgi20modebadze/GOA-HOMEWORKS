#მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაბეჭდეთ ერთიდან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი ცალკე და მხოლოდ კენტი რიცვხების ჯამი ცალკე, გამოიყენეთ for loop

num = int(input("enter your number: "))

even_sum = 0
odd_sum = 0

for i in range(num):
    if i % 2 == 0:
        even_sum = even_sum + i
    else:
        odd_sum = odd_sum + i

print(even_sum)
print(odd_sum)
    