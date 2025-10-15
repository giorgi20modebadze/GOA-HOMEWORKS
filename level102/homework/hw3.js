//ფუნქციამ მიიღოს პაროლი (პარამეტრი).

//while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

//სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

//თუ დაემთხვა → "წარმატებით!".

function func(correctPassword) {
  let userInput = prompt("გთხოვთ შეიყვანეთ პაროლი:");

  while (userInput !== correctPassword && userInput !== null) {
    userInput = prompt("არასწორია, სცადეთ თავიდან:");
  }

  if (userInput === correctPassword) {
    console.log("წარმატებით!");
  } else {
    console.log("გაუქმდა!");
  }
}

func("123456");

