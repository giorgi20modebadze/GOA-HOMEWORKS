//ფუნქციამ მიიღოს ორი რიცხვი (start, end).

//for loop-ით შეკრიბოს ყველა რიცხვი ამ დიაპაზონში.

//თუ ჯამი > 100 → "დიდი ჯამი"

//სხვაგვარად → "პატარა ჯამი".

function sum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  if (sum > 100) {
    console.log("დიდი ჯამი");
  } else {
    console.log("პატარა ჯამი");
  }
}


sum(1, 10);   
sum(20, 30);  
sum(50, 51);  
sum(1, 5);    
sum(10, 20);  
