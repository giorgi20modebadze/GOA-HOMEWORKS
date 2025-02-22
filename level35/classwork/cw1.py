#  1) შექმენით სია რომელშიც იქნება 10 განსხვავებული რენდომ რიცხვი შემდეგ კი დაბეჭდეთ ამ სიაში არსებული ყველა რიცხვის ჯამი - sum ფუნქციის გამოყენებსი გარეშე


numbers = [3, 76, 96, 639, 12, 90, 8395, 481, 23, 10]

sum_of_numbers = 0

for i in range(len(numbers)):
    sum_of_numbers += numbers[i]

print(sum_of_numbers)