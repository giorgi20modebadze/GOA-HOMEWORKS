
#a = 5
#b = "10"
#result = a + b
#print("Result:", result)

#კოდი გამოიტანს ერორს დაწერეთ რატომ და ასევე ცალკე დაწერეთ სწორი ფორმა 

# there is one problem in 3rd line, a variable is string, b variable is integer, it is impossible str+int

a = 5
b = "10"
result = a + int(b)
print("Result:", result)