//1)დავალება 1 – ლუწი/კენტი მთვლელი

//მომხმარებელს prompt–ით შეეკითხე ორი რიცხვი: start და end.

//გამოიყენე for ციკლი, რომ გაიარო ყველა რიცხვი start-იდან end-მდე.

//დაითვალე ცალ–ცალკე რამდენია ლუწი და რამდენია კენტი.

//ბოლოს დაბეჭდე: "ლუწების რაოდენობა: X, კენტების რაოდენობა: Y".


let start = Number(prompt("გთოვთ შეიყვანოთ საწყისი რიცხვი:"))
let end = Number(prompt("გთხოვთ შეიყვანოთ ბოლო რიცხვი:"))

let evenCount = 0
let oddCount = 0  

for (let i = start; i <= end; i = i + 1) {
  if (i % 2 === 0) {
    evenCount = eveCount + 1
  } else {
    oddCount = oddCount + 1
  }
}

console.log(`ლუწების რაოდენობა: ${evenCount}, კენტების რაოდენობა: ${oddCount}`)

