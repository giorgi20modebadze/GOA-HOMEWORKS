//დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr) {
    
}
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
}

console.log(" ლუწი რიცხვების რაოდენობა: " + evenCount);

console.log("კენტი რიცხვების რაოდენობა: " + oddCount);


countEvenOdd([1, 2, 3, 4, 5, 6, 7,]);


