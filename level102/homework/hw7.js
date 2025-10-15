//ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.

//თუ ჯამი > 50 → "დიდი ჯამი"

//სხვაგვარად → "პატარა ჯამი".


function sumNumbers(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {  
      sum += i;
    }
  }

  if (sum > 50) {
    console.log("დიდი ჯამი");
  } else {
    console.log("პატარა ჯამი");
  }
}


sumNumbers(1, 10);   
sumNumbers(10, 20);  
