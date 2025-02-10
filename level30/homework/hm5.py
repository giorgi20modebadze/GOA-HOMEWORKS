#შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები, შეამოწმეთ რიცხვი ლუწია თუ კენტი და თუ კენტია დაამატეთ ახალ ლისტში

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_list = []

for i in range(len(numbers)):
    if numbers[i] % 2 != 0:
        new_list.append(numbers[i])

print(new_list)
