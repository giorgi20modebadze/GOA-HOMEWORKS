//ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.

//თითო რიცხვისთვის შეამოწმეთ if else-ით:

//თუ ლუწია → დაბეჭდოს "ლუწია"

//თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი


function func(start, end) {
  let i = start;

  while (i <= end) {
    if (i % 2 === 0) {
      console.log(i + " ლუწია");
    } else {
      console.log(i + " კენტია");
    }
    i++;
  }
}


func(1, 10);
