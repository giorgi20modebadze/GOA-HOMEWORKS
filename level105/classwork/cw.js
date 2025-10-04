//1)მომხმარებელს შემოატანინეთ რიცხვი,1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე დაატრიალეთ ლუპი და ჩაამატეთ ეს როცხვები სიაში,შემდეგ ამ სიიდან დაბეჭდეთ მხოლოდ ლუწი რიცხვები
 



let userInput = prompt("გთხოვთ შეიყვანოთ რიცხვი:");
let number = parseInt(userInput);

if (!isNaN(number) && number >= 1) {
    let numbersList = [];

    for (let i = 1; i <= number; i++) {
        numbersList.push(i);
    }
    console.log("ლუწი რიცხვებია:");
    numbersList.forEach(function(num) {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
} else {
    console.log("გთხოვთ შეიყვანოთ სწორი რიცხვი, რომელიც 1-ზე მეტია ან ტოლია.");
}
