# მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი თუ 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის

num = int(input("enter your number: "))

def age(num1):
    if num >= 18:
        print("shen srulwlovani xar")
    else:
        print("arasrulwlovani xar")

age(num)