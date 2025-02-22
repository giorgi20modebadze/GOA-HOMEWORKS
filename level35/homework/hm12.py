#შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა კენტ რიცხვს


def num():
    number = int(input("enter your number: "))
    for i in range(1, number + 1, 2):
        print(i)

num()