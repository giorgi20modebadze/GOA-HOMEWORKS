
def numbers(a, b):
   
    if a % 2 == 0:
        a = a // 2  
    else:
        a = a + 1  
    
    
    return a - b


result = numbers(4, 2)  
print(result)  

result2 = numbers(5, 3)  
print(result2)  

#keyword გამოიყენება ფუნქციის ამოწურვის დასაწყებად და გარკვეული მნიშვნელობის დაბრუნებისთვის
