#მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი


num = int(input("enter your number: "))

def number(number1):
    if num % 2 == 0:
        print("es ricxvi luwia")

    else:
        print("es ricxvi kentia")

number(num)
