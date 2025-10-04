# შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა ლუწ რიცხვს


def num():
    number = int(input("enter your number: "))
    for i in range(0, number + 2, 2):
        print(i)

num()