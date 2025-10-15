//შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)



function findMax(arr) {
  if (arr.length === 0) {
    console.log("მასივი ცარიელია.");
    return;
  }

  let max = arr[0];
  console.log("დასაწყისია max:", max);

  for (let i = 1; i < arr.length; i++) {
    console.log("ამოწმება: arr[" + i + "] = " + arr[i]);


    if (arr[i] > max) {
      max = arr[i];
      console.log("ახალი მაქსიმუმია:", max);
    }
  }

  console.log("უმაღლესი რიცხვი არის:", max);
}

