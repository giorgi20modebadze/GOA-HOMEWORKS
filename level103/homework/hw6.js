//შექმენი ფუნქცია რომელსაც არგუმენტად გადაეცემა სია,შენი დავალებაა რომ ამ სიიდან გამოიტანო თითეული ელემენტი ცალ ცალკე,გამოიყენე for loop/while loop


function printElements(arr) {
  console.log("ელემენტები for loop-ით:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  console.log("ელემენტები while loop-ით:");


  let n = 0;
  while (n < arr.length) {
    console.log(arr[n]);
    n++;
  }
}


printElements(["გიორგი", 14, "საბა", 90.5, "ირაკლი", true]);
