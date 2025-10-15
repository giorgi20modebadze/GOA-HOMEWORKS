//ფუნქციამ მიიღოს რიცხვი(პარამეტრი) , while loop ის გამოყენებით შენი დავა;ებაა 1 დან პარამეტრშ გადაცემულ რიცხვამდე დაითვალო ყველა კენტი რიცხვის და ასევე ყველა ლუწი რიცხვის რაოდენობა ცალ ცალკე,გამოიძახე ფუნქცია რამდენჯერმე გადაეცი განსხვავებული მნიშვნელობები


function countNumbers(num) {
  let evenCount = 0;
  let oddCount = 0;
  let i = 1;

  while (i <= num) {
    if (i % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    i++;
  }

console.log("კენტი რიცხვების რაოდენობა: " + oddCount);

console.log("ლუწი რიცხვების რაოდენობა: " + evenCount);

  console.log('-----------------------');
}


countNumbers(10);
countNumbers(15);
countNumbers(5);
countNumbers(20);
countNumbers(1);
