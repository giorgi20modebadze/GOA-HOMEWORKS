//მომხმარებელს შემოატანინეთ რაიმე რიცხვი(გადააქცეიიეთ მთლიანი prompt number ტიპის მონაცემად რომ მომხმარებლის მიერ შემოტანილი მნშვნელობა იყოს number ტიპის)შემდეგ შეადარეთ, თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის მეტი 0 ზე და არის ლუწი მაშინ დაუკონსოლლოგეთ --> "this number is positive and Even" ,შემდეგ შეამოწმეთ 
//თუ მომხმარებლის შემოტანილი რიცხვი არის ნაკლები 0 ზე და არის კენტი მაშინ დაუკონსოლლოგეთ ---> "this number is Odd" , სხვა შემთხვევაში დაუკონსოლლოგეეთ "This number is zero"



let number = Number(prompt("გთხოვთ შეიყვანოთ ნებისმიერი რიცხვი:"))


if (number > 0 == number % 2 === 0) {
  console.log("this number is positive and Even")
} else if (number < 0 == number % 2 !== 0) {
  console.log("this number is Odd")
} else {
  console.log("This number is zero")
}

 
