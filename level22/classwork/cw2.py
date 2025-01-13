#მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for loop

num = int(input("enter your number: "))

sum = 0

for i in range(0, num, 2):
    sum = sum + i
print(sum)


# ამ დავალების ამოხსნის მეორე გზა

num = int(input("enter your number: "))

sum = 0

for i in range(num):
    if i % 2 == 0:
        sum = sum + i

print(sum)







    

