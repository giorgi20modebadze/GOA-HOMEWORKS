//შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა)

function average(arr) {
  if (arr.length === 0) {
    console.log("სია ცარიელია და საშუალო ვერ გამოითვლება.");
    return;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;
  console.log("საშუალო არის:", avg);
}
