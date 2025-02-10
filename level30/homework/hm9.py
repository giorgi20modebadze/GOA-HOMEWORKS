# გამოიყენეთ append და pop რომ დაატრიალოთ ლისტი და დაპრინტეთ შემდეგ 


my_list = [3, 5, 1, 6, 9]

new_list = []

for i in range(1, len(my_list) + 1):
    new_list.append(my_list[-i])
    

print(new_list)