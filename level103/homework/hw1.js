//)შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("ჯამი არის:", sum);
}
sumArray([1, 2, 3, 4, 5]);  
