console.log("{exercise 1}");

function sumEvenNumbers(n) {
  let sum = 0;
  let number = 1;

  while (number <= n) {
    if (number % 2 == 0) {
      sum = sum + number;
    }
    number++;
  }

  return sum;
}

let result = sumEvenNumbers(50);

console.log("-The sum of numbers from 1 to 50 is: " + result + ".");
