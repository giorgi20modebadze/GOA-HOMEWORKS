#შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება და წაშლა, როდესაც მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს

shopping_list = []

while True:
    thing = input("risi yidva gsurt?: ")
    shopping_list.append(thing)
    print("rames xom ar daamatebdit?: ")
    answer = input()

    if answer == "ara":

        break

print(shopping_list)