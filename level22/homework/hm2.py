#მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ რიცხვების საშუალო არითმეტიკული.

num = int(input("enter number: "))

sum = 0

for i in range(1, num + 1):
    sum = sum + i
    

print(sum / num)
