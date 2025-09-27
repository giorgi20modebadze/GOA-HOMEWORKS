//2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში

let start = Number(prompt("გთხოვთ შეიყვანეთ საწყისი რიცხვი:"))
let end = Number(prompt("გთხოვთ შეიყვანეთ ბოლო რიცხვი:"))

let sum = 0
let count = 0

for (let i = start; i <= end; i = i + 1) {
  sum = sum + i
  count++
}

let average = sum / count;

console.log("ჯამი:", sum);
console.log("საშუალო არითმეტიკული:", average)
