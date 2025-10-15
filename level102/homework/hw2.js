//ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.

//დააბრუნოს შედეგი.

function func(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let result = func(10, 25, 17);
console.log("ყველაზე დიდი რიცხვია: " + result);
