#მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ორზე ნამრავლების ჯამი
    

num = int(input("enter number: "))


sum = 0

for i in range(num):
    sum = sum + (i * 2)

print(sum)
    