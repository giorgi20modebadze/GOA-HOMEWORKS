//8)ვინც დაამთავრეთ : მომხმარებელს შემოატანინეთ რიცხვი,1 დან მომხმ შემოტანილ რიცხვამდე იპოვე რიცხვების ჯამი

let input = prompt("გთხოვთ შეიყვანეთ რიცხვი:");
let number = parseInt(input)

let i = 1
let sum = 0

while (i <= number) {

    sum += i
   
    i = i + 1

}

console.log("რიცხვების ჯამი 1-დან " + number + " არის: " + sum)
