//2)შექმენი სია -->  [20 , "giorgi" , 16 , 60.7 , "tbilisi" , "jora"]

//შენი დავალებაა რომ ინდექსების დახმარებით გამოიტანო ყველა ელემენტი სიიდან და გამოიტანო კონსოლში while loop დახმარებით

//შენი დავალებაა რომ giorgi შეცვალო "irakli" ით ,16 შეცვალო 90 ით და jora შეცვალო givia თი,ამ ყველაფერს რომ შეცვლი გამოიტანე საბოლოო შეცვლილი სია


let mylist = [20, "giorgi", 16, 60.7, "tbilisi", "jora"]

let i = 0
while (i < 6) {
    console.log(mylist[i])

    i++
}




mylist[1] = "irakli"

mylist[2] = 90

mylist[5] = "givia"


console.log(mylist)







