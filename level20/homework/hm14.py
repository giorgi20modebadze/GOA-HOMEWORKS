#შეიყვანეთ რიცხვი და დაბეჭდეთ მისი ყველა წყვილი რიცხვი (მაგალითად, 8 -> 2, 4, 6, 8).


num = int(input("enter number: "))


if num % 2 == 1:
    print(num)
    num = num - 1

while num > 0:
    print(num)
    num = num - 2

