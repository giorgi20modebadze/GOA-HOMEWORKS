#დაიწყეთ რიცხვების სიით, გამოიყენეთ while loop რომ წაშალოთ ყველა რიცხვი ამ სიიდან და გამოიყენეთ pop რო დაპრინტოთ ეს ყველა ელემენტი სანამ ლისტი არ დაცარიელდება

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

i = 0
while i < len(numbers):
    remove_numbers = int(input("which number do you want to remove: "))
    numbers.pop(remove_numbers)

    i = i + 1
print(numbers)