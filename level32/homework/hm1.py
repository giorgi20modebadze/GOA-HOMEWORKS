#გააკეთეთ Reverse List და გამოიყენეთ while loop. შემოაბრუნეთ ყველა რიცხვი ლისტში. ახსნა: [1, 2, 3, 4,  5] => [5, 4, 3, 2, 1]


numbers = [3, 4, 5, 6, 7, 8]

reverse_list = []

i = len(numbers) - 1

while i >= 0:
    reverse_list.append(numbers[i])

    i = i - 1

print(numbers)

print(reverse_list)