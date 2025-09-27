//1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია

let userNumber = Number(prompt("შეიყვანეთ რიცხვი:"))

let evenCount = 0 
let oddCount = 0  

for (let i = 1; i <= userNumber; i++) {
  if (i % 2 === 0) {
    evenCount++
  } else {
    oddCount++
  }
}

console.log(`ლუწების რაოდენობა: ${evenCount}, კენტების რაოდენობა: ${oddCount}`)
