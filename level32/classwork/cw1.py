# შექმენით სია რომელშიც იქნება 10 სხვადასხვა რენდომ რიცხვი, შემდეგ მიწდვით ამ სიის თითოეულ ელემენტს და დაბეჭდეთ თითოეული ელემენტი ოღონდ თუ რიცხვი იქნება ხუთის ჯერადი მიუწერეთ გვერძე რომ ხუთის ჯერადია ხოლო სამის ჯერადებს მიუწერეთ რომ სამის ჯერადია

list = [2, 3, 7, 9, 10, 13, 15, 20, 21, 34]

for i in range(len(list)):
    if list[i] % 5 == 0:
        print(list[i], "5 is jeradia")
    elif list[i] % 3 == 0:
        print(list[i], "3 is jeradia")
    else:
        print(list[i])