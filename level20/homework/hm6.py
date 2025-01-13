#შექმენით input  რომელიც მომხმარებელს ეკითხება რიცხვს და შემდეგ while  ციკლის გამოყენებით ის დაიწყებს რიცხვების დაბეჭდვსს სანამ არ მიაღწევს ნულს

num = int(input("enter your number: "))

while num > 0:
    print(num)

    num = num - 1
