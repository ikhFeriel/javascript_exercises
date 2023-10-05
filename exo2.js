console.log("{exercise 2}");

function calculateFactorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "(ERROR!):Invalid input. Please enter a positive integer.";
  }

  let factorial = 1;
  let number = 1;

  while (number <= n) {
    factorial = factorial * number;
    number++;
  }
  return factorial;
}

let numbers = calculateFactorial(5);

console.log("-The factorial of 5 is: " + numbers);
