//მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი

let start = Number(prompt("შეიყვანე sawyisi რიცხვი:"))
let end = Number(prompt("შეიყვანე მეორე რიცხვი:"))

let evenSum = 0

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    evenSum += i
  }
}

console.log(`ლუწი რიცხვების ჯამი: ${evenSum}`)
