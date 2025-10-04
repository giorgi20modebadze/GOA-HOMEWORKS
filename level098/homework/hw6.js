//მომხმარებელს შემოატანინეთ ადამიანის სახელი,შემდეგ შეამოწმეთ --->  თუ ცვლადში შენახული მნიშვნელობა უდრის თქვენს სახელს დაუკონსოოლოგეთ --> "we have same names" , თუ მომხმარებლის შემოტანილი მნიშვნელობა უდრის "gabrieli" ის მაშინ დაუკონსოლლოგეთ --> "you have my mentor's name" , ასევე შეამოწმე თუ მომხმარებლის მიერ შემოტანილი სახელი უდრის "goga" ს მაშინ დაუკონსოლლოგეთ --> "You have my group leader's name" ,სხვა შემთხვევაში დაუკონსოლლოგეთ  --> "Who the hell are you?"





let userName = prompt("შეიყვანეთ თქვენი სახელი:")


let myName = "giorgi"


if (userName === myName) {
  console.log("we have same names")
} else if (userName === "gabrieli") {
  console.log("you have my mentor's name")
} else if (userName === "goga") {
  console.log("You have my group leader's name")
} else {
  console.log("Who the hell are you?")
}
