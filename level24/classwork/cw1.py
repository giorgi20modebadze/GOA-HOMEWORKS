#გააკეთეთ სარეგისტრაციო, მომხმარებელს შემოატანიეთ სახელი და პაროლი, რეგისტრაციის შემდეგ მოხმარებელი უნდა შევიდეს ექაუნთზე, შეეკითხეთ სახელი და პაროლი მომხარებელს რათა შევიდეს ექაუნთზე სანამ მომხმარებელი არ შეიტანს იმ ინფორმაციას რაც შეიყვანა რეგისტრაციის დროს მანამ დაიბეჭდოს რომ შეტანილი ინფორმაცია არასწორია და შეეკითხოს თავიდან, ხოლო თუ მომხმარებელმა ყველაფერი სწორად შეიყვანა დაიბეჭდოს welcome


print("registration: ")
reg_name = input("register your name: ")
reg_password = input("register your password: ")

print("log in: ")
log_name = input("enter your name: ")
log_password = input("enter your password: ")

while log_name != reg_name or log_password != reg_password:
    print("incorrect name or password, please try again: ")
    log_name = input("please enter correct name: ")
    log_password = input("please enter correct password: ")


print("welcome")
    

