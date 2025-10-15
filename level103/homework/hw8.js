//შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი

function countEvenAndSumOdd(arr) {
  let evenCount = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddSum += arr[i];
    }
  }

  console.log("ლუწი რიცხვების რაოდენობაა:", evenCount);
  console.log("კენტი რიცხვების ჯამია:", oddSum);
}
